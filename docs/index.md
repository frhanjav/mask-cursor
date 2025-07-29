# Mask Cursor Documentation

## Overview

This is a Next.js-based web page whose main feature is a dynamic mask effect that follows the user's mouse, revealing a highlighted message. The project uses React, SCSS modules, and a custom mouse position hook.

---

## How It Works

- The main page displays two text blocks.
- The top block is masked: only the area under the mask (which follows the mouse) is visible in a highlighted color.
- When the user hovers over the masked text, the mask (circle pointer on the page) grows larger, revealing more of the text.
- The mask effect is achieved using CSS `mask-image` and dynamic inline styles for mask position and size, animated with the `motion` library.
- The mouse position is tracked using a custom React hook.

---

## Inspirations & References

- Olivier Larose' mask cursor effect: [mask-cursor-effect](https://blog.olivierlarose.com/tutorials/mask-cursor-effect)
- Inspired by Minh Pham: [minhpham.design](https://minhpham.design/)
- Similar to SVG mask effect by Aceternity UI: [svg-mask-effect](https://ui.aceternity.com/components/svg-mask-effect)

---

## Technologies Used

- **Next.js**: React framework for SSR and routing.
- **React**: UI library.
- **SCSS Modules**: Scoped CSS for styling.
- **Custom Hooks**: For mouse tracking.
- **CSS Masking**: For the interactive reveal effect.
- **Framer Motion**: For smooth animation of mask position and size.

---
