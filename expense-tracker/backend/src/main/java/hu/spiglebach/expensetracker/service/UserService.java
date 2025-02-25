package hu.spiglebach.expensetracker.service;

import hu.spiglebach.expensetracker.model.dto.auth.SignUpRequest;
import hu.spiglebach.expensetracker.model.entity.User;
import hu.spiglebach.expensetracker.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public User addUser(SignUpRequest signUpRequest) {
        var encodedPassword = passwordEncoder.encode(signUpRequest.password());
        var newUser = new User(signUpRequest.username(), encodedPassword);
        return userRepository.save(newUser);
    }
}
