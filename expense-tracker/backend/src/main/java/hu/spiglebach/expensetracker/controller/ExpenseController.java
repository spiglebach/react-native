package hu.spiglebach.expensetracker.controller;

import hu.spiglebach.expensetracker.model.dto.ExpenseDto;
import hu.spiglebach.expensetracker.model.entity.Expense;
import hu.spiglebach.expensetracker.repository.ExpenseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/expenses")
@RequiredArgsConstructor
public class ExpenseController {
    private final ExpenseRepository expenseRepository;

    @GetMapping
    public ResponseEntity<List<Expense>> getExpenses() {
        return ResponseEntity.ok(expenseRepository.findAll());
    }

    @PostMapping
    public ResponseEntity<Expense> getExpenses(@RequestBody ExpenseDto expenseDto) {
        return ResponseEntity.ok(expenseRepository.save(new Expense(expenseDto.amount(), expenseDto.date(), expenseDto.description())));
    }

    @PutMapping("/{expenseId}")
    public ResponseEntity<Expense> updateExpense(@PathVariable Long expenseId, @RequestBody ExpenseDto expenseDto) {
        var expense = expenseRepository.findById(expenseId).orElseThrow();
        expense.setAmount(expenseDto.amount());
        expense.setDate(expenseDto.date());
        expense.setDescription(expenseDto.description());
        return ResponseEntity.ok(expenseRepository.save(expense));
    }

    @DeleteMapping("/{expenseId}")
    public ResponseEntity<Void> deleteExpense(@PathVariable Long expenseId) {
        expenseRepository.deleteById(expenseId);
        return ResponseEntity.noContent().build();
    }
}
