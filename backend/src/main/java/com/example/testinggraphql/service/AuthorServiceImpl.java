package com.example.testinggraphql.service;

import com.example.testinggraphql.entity.Author;
import com.example.testinggraphql.entity.AuthorDto;
import com.example.testinggraphql.repository.AuthorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AuthorServiceImpl implements AuthorService{
    private AuthorRepository authorRepository;

    public AuthorServiceImpl(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @Override
    public Author getAuthor(long id) {
        return authorRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    }

    @Override
    public List<Author> getAuthors() {
        return authorRepository.findAll();
    }

    @Override
    public Author addAuthor(AuthorDto authorDto) {
        Author author = new Author();
        author.setName(authorDto.getName());

        author = authorRepository.save(author);
        return author;
    }

    @Override
    public String removeAuthor(long authorId) {
        return null;
    }

}
