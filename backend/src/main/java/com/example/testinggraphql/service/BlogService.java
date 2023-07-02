package com.example.testinggraphql.service;

import com.example.testinggraphql.entity.Blog;
import com.example.testinggraphql.entity.BlogDto;
import org.springframework.stereotype.Service;

import java.util.List;

public interface BlogService {
    Blog addBlog(BlogDto blog);
    List<Blog> getBlogs();
    Blog getBlog(long id);
    String removeBlog(long id);
}

