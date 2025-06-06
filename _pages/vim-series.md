---
title: "How to Vim Series"
permalink: /vim-series/
layout: single
author_profile: true
toc: true
toc_sticky: true
---

A comprehensive series of posts about mastering Vim. Whether you're a beginner or looking to improve your Vim skills, these posts will help you become more productive.

## Series Posts

{% assign posts_with_tag = site.tags.vim %}
{% if posts_with_tag %}
  {% assign vim_posts = posts_with_tag | sort: 'date' %}
{% else %}
  {% assign vim_posts = "" | split: "," %}
{% endif %}

{% for post in vim_posts %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
  
  {% if post.excerpt %}
  {{ post.excerpt | strip_html | truncatewords: 30 }}
  {% endif %}
{% endfor %}

## What You'll Learn

This series covers:

- **Navigation**: Moving efficiently around files and buffers
- **Editing**: Advanced text manipulation techniques  
- **Customization**: Making Vim work for your workflow
- **Plugins**: Essential plugins for modern development
- **Workflows**: Real-world editing scenarios

## Getting Started

If you're new to Vim, I recommend starting with the basic navigation posts and working your way through chronologically. Each post builds on concepts from previous ones.

---

*Have suggestions for topics to cover? [Get in touch!](/contact/)* 