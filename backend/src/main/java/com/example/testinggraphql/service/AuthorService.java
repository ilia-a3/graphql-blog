package com.example.testinggraphql.service;

import com.example.testinggraphql.entity.Author;
import com.example.testinggraphql.entity.AuthorDto;

import java.util.List;

public interface AuthorService {
    Author getAuthor(long id);
    List<Author> getAuthors();
    Author addAuthor(AuthorDto authorDto);
    String removeAuthor(long authorId);
}
