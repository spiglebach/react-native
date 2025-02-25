package hu.spiglebach.expensetracker;

import hu.spiglebach.expensetracker.model.dto.auth.SignUpRequest;
import hu.spiglebach.expensetracker.model.entity.Expense;
import hu.spiglebach.expensetracker.repository.ExpenseRepository;
import hu.spiglebach.expensetracker.service.UserService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class ExpenseTrackerBackendApplication {

    @Bean
    public String preload(ExpenseRepository expenseRepository, UserService userService) {
        expenseRepository.save(new Expense(2.99, LocalDate.of(2025, 2, 19), "Pastry"));
        expenseRepository.save(new Expense(80.99, LocalDate.of(2025, 2, 18), "Skiing"));
        expenseRepository.save(new Expense(140.44, LocalDate.of(2025, 2, 12), "Shopping"));
        expenseRepository.save(new Expense(4.99, LocalDate.of(2025, 2, 11), "Chocolate"));
        expenseRepository.save(new Expense(12.99, LocalDate.of(2025, 2, 10), "Another book"));
        expenseRepository.save(new Expense(14.99, LocalDate.of(2025, 2, 3), "A book"));
        expenseRepository.save(new Expense(20.32, LocalDate.of(2025, 1, 30), "Fuel"));
        expenseRepository.save(new Expense(5.99, LocalDate.of(2025, 1, 24), "Some bananas"));
        expenseRepository.save(new Expense(59.99, LocalDate.of(2025, 1, 10), "Shoes"));

        userService.addUser(new SignUpRequest("user", "user"));
        return "asd";
    }

    public static void main(String[] args) {
        SpringApplication.run(ExpenseTrackerBackendApplication.class, args);
    }

}
