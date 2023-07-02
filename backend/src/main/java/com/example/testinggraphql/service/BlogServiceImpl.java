package com.example.testinggraphql.service;

import com.example.testinggraphql.entity.Author;
import com.example.testinggraphql.entity.Blog;
import com.example.testinggraphql.entity.BlogDto;
import com.example.testinggraphql.repository.AuthorRepository;
import com.example.testinggraphql.repository.BlogRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BlogServiceImpl implements BlogService {
    private BlogRepository blogRepository;
    private AuthorRepository authorRepository;

    public BlogServiceImpl(BlogRepository blogRepository, AuthorRepository authorRepository) {
        this.blogRepository = blogRepository;
        this.authorRepository = authorRepository;
    }

    @Override
    public Blog addBlog(BlogDto blogDto) {
        Author author = authorRepository.findById(blogDto.getAuthorId()).orElseThrow(IllegalArgumentException::new);
        Blog blog = new Blog();
        blog.setAuthor(author);
        blog.setBody(blogDto.getBody());
        blog.setTitle(blogDto.getTitle());

        blogRepository.save(blog);
        return blog;
    }

    @Override
    public List<Blog> getBlogs() {

        return blogRepository.findAll();
    }

    @Override
    public Blog getBlog(long id) {
        return null;
    }

    @Override
    public String removeBlog(long id) {
        return null;
    }
}
