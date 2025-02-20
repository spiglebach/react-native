package hu.spiglebach.expensetracker.repository;

import hu.spiglebach.expensetracker.model.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}
