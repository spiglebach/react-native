package hu.spiglebach.expensetracker.configuration.security;

import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
public class JwtService {
    private static final long TOKEN_EXPIRATION_MILLIS = 1000 * 60 * 30; // 30 mins

    private final SecretKey secretKey;
    private final JwtParser jwtParser;

    public JwtService() {
        secretKey = Jwts.SIG.HS256.key().build();
        jwtParser = Jwts.parser().verifyWith(secretKey).build();
    }

    public String generateJwt(String username) {
        var issuedAt = new Date();
        var expiresAt = new Date(issuedAt.getTime() + TOKEN_EXPIRATION_MILLIS);
        return Jwts.builder().subject(username)
                .issuedAt(issuedAt)
                .expiration(expiresAt)
                .signWith(secretKey)
                .compact();
    }

    public String extractSubject(String token) {
        var claims = jwtParser.parseSignedClaims(token).getPayload();
        var expiration = claims.getExpiration();
        if (expiration.before(new Date())) {
            throw new RuntimeException("token expired");
        }
        return claims.getSubject();
    }
}
