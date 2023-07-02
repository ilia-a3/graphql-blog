package com.example.testinggraphql.repository;

import com.example.testinggraphql.entity.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author, Long> {
}
