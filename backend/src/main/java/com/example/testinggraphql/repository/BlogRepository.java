package com.example.testinggraphql.repository;

import com.example.testinggraphql.entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository  extends JpaRepository<Blog, Long> {
}
