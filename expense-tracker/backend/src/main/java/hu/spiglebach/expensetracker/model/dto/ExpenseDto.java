package hu.spiglebach.expensetracker.model.dto;

import java.time.LocalDate;

public record ExpenseDto(double amount, LocalDate date, String description) {
}
