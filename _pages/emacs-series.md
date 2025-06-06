---
title: "Emacs Deep Dive Series"
permalink: /emacs-series/
layout: single
author_profile: true
toc: true
toc_sticky: true
---

A comprehensive exploration of Emacs - the extensible, customizable, free text editor and computing environment. Whether you're an Emacs beginner or veteran, these posts dive deep into what makes Emacs special.

## Series Posts

{% assign emacs_posts = site.tags.emacs | sort: 'date' %}

{% for post in emacs_posts %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
  
  {% if post.excerpt %}
  {{ post.excerpt | strip_html | truncatewords: 30 }}
  {% endif %}
{% endfor %}

## What You'll Learn

This series explores:

- **Philosophy**: Understanding the Emacs way of thinking
- **Configuration**: Building and maintaining your Emacs setup
- **Packages**: Essential and cutting-edge packages for modern development
- **Workflows**: Real-world Emacs usage patterns
- **Comparison**: How Emacs fits in the modern editor landscape

## Emacs Resources

### Essential Reading
- [GNU Emacs Manual](https://www.gnu.org/software/emacs/manual/)
- [Emacs Redux](https://emacsredux.com) - My other Emacs-focused blog
- [Mastering Emacs](https://www.masteringemacs.org/)

### Configuration Frameworks
- [Doom Emacs](https://github.com/doomemacs/doomemacs) - Vim-friendly Emacs
- [Spacemacs](https://www.spacemacs.org/) - Community-driven configuration
- [Prelude](https://github.com/bbatsov/prelude) - My own Emacs distribution

## Getting Started

New to Emacs? Start with the philosophy posts to understand the Emacs mindset, then move to configuration and practical usage guides.

---

*Questions about Emacs? [Drop me a line!](/contact/)* 