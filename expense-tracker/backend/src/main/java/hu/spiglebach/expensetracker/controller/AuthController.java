package hu.spiglebach.expensetracker.controller;

import hu.spiglebach.expensetracker.configuration.security.JwtService;
import hu.spiglebach.expensetracker.model.dto.auth.AuthenticationRequest;
import hu.spiglebach.expensetracker.model.dto.auth.SignUpRequest;
import hu.spiglebach.expensetracker.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final UserService userService;

    @PostMapping("/authenticate")
    public ResponseEntity<String> authenticate(@RequestBody AuthenticationRequest authenticationRequest) {
        var authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authenticationRequest.username(), authenticationRequest.password())
        );
        if (authentication.isAuthenticated()) {
            return ResponseEntity.ok(jwtService.generateJwt(authenticationRequest.username()));
        } else {
            throw new UsernameNotFoundException("invalid username or password");
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody SignUpRequest signUpRequest) {
        var user = userService.addUser(signUpRequest);
        return ResponseEntity.ok(jwtService.generateJwt(user.getUsername()));
    }
}
