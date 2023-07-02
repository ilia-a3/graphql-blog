package com.example.testinggraphql.controller;

import com.example.testinggraphql.entity.Author;
import com.example.testinggraphql.entity.AuthorDto;
import com.example.testinggraphql.entity.Blog;
import com.example.testinggraphql.entity.BlogDto;
import com.example.testinggraphql.service.AuthorService;
import com.example.testinggraphql.service.BlogService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class BlogController {
    private BlogService blogService;
    private AuthorService authorService;

    public BlogController(BlogService blogService, AuthorService authorService) {
        this.blogService = blogService;
        this.authorService = authorService;
    }

    @QueryMapping
    List<Blog> blogs() {
        return blogService.getBlogs();
    }
    @QueryMapping
    List<Author> authors() {
        return authorService.getAuthors();
    }

    @MutationMapping
    Blog addBlog(@Argument BlogDto blog) {
        return blogService.addBlog(blog);
    }

    @MutationMapping
    Author addAuthor(@Argument AuthorDto author) {
        return authorService.addAuthor(author);
    }
}
