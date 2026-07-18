---
description: Comprehensive frontend design rules covering accessibility, layout, spacing, responsive behavior, component anatomy, interaction states, and UI best practices.
globs: ["**/*.tsx"]
alwaysApply: true
category: frontend
tags: [accessibility, frontend, ui, ux, layout, components]
---

# Frontend Design System

Rules curated by **Spencer Goldade (spencergoldade.ca)**.

Use these rules whenever creating or modifying frontend components, layouts, pages, or interactive experiences.

The goal is to create interfaces that are:

- Accessible
- Consistent
- Responsive
- Easy to understand
- Production-ready

---

# Accessibility

## Core Accessibility Targets

- Aim for **WCAG 2.1 AA** or higher.
- Accessibility is a core requirement, not an enhancement.

---

## Semantic Structure

- Prefer semantic HTML over generic elements.
- Use:
  - `<button>` for actions.
  - `<a>` for navigation.
  - Proper heading hierarchy (`h1 → h2 → h3`).
  - `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>` where appropriate.

Maintain logical document structure for both users and assistive technologies.

---

## ARIA

Use native HTML first.

Only use ARIA when native semantics cannot achieve the required behavior.

For custom interactive components ensure:

- correct role
- correct state
- correct keyboard support
- accessible labeling

Examples:

- `role="dialog"`
- `role="tablist"`
- `aria-label`
- `aria-labelledby`

Provide descriptive alt text for meaningful images.

Ignore decorative images from screen readers.

---

## Keyboard Navigation

Every interactive element must:

- be keyboard accessible
- follow logical tab order
- have a visible focus indicator

When opening dialogs:

- move focus into the dialog
- trap focus correctly
- restore focus after closing

Never create keyboard traps.

---

## Colors & Contrast

Maintain WCAG AA contrast.

Never communicate information using color alone.

Pair status colors with:

- icons
- labels
- helper text

---

## Accessibility Anti-patterns

Never:

- remove focus outlines without replacement
- build mouse-only interactions
- misuse ARIA instead of semantic HTML

---

# Layout & Responsive Design

## Core Principles

Use simple layout primitives:

- Grid
- Flex
- Stack
- Cluster

Avoid deeply nested containers.

Keep primary content first in both DOM order and visual hierarchy.

---

## Spacing

Use a spacing scale.

Example:

- spacing-1
- spacing-2
- spacing-3
- spacing-4

Avoid arbitrary spacing values.

Maintain consistent vertical rhythm.

Section spacing should always be larger than internal component spacing.

---

## Visual Density

Avoid layouts that are:

- too crowded
- too sparse

Group related controls together.

Use whitespace intentionally.

---

## Responsive Behavior

Support at least:

- Mobile
- Tablet
- Desktop

On smaller screens:

- collapse multiple columns
- avoid horizontal scrolling
- keep important actions visible

Prefer:

- max-width
- fluid layouts

Avoid fixed widths whenever possible.

---

## Layout Anti-patterns

Never:

- rely on margin hacks
- invent random spacing values
- flatten hierarchy with equal spacing everywhere

---

# UI Components

Every component should have clear anatomy.

Separate:

- Container
- Content
- Interaction

Each component should have one obvious primary action.

Secondary actions should remain visually secondary.

---

# Required Component States

Every interactive component should support:

## Default

Ready for interaction.

---

## Hover

Clearly communicate interactivity.

---

## Focus

Visible and accessible.

---

## Active

Provide immediate feedback.

---

## Disabled

Clearly indicate unavailable actions.

Use proper disabled semantics.

---

## Loading

Show:

- skeletons
- inline loaders
- progress indicators

Avoid blank interfaces.

---

## Error

Display actionable messages.

Errors should appear near the affected component whenever possible.

---

# Collections

For lists, cards and tables:

Provide:

- empty states
- loading states
- skeletons

Keep click targets generous.

---

# Interaction Guidelines

Users should always know:

- what is clickable
- what is loading
- what succeeded
- what failed

Feedback should be immediate.

---

# Component Anti-patterns

Never:

- hide hover or focus states
- mix destructive and safe actions without distinction
- rely only on toast notifications for important errors

Critical errors should be connected to the affected UI.

---

# Final Checklist

Before completing any frontend work, verify:

## Accessibility

- Semantic HTML
- Keyboard navigation
- Proper focus management
- ARIA only when needed
- WCAG AA contrast

## Layout

- Responsive
- Proper spacing
- Good hierarchy
- Consistent alignment

## Components

- Default state
- Hover state
- Focus state
- Active state
- Disabled state
- Loading state
- Error state

## UX

- Empty states
- Helpful feedback
- Clear interactions
- Large click targets

If any of these areas are weak, improve them before considering the work complete.