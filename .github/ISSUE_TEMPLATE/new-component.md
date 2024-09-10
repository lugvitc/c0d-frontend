---
name: New Component
about: Template issue format to create new components
title: "<Component name> component"
labels: ''
assignees: ''

---

## Description
Concise description of what the component is for and any extra technical details. Also include changes of the element in different states (such as on hover, lighter background).
Include relevant images from the concept UI.

ex: Create inputbox component which takes the hint as parameter. Extend HTMLInputElement. Password box will need type set to password. Check src/components/Text.tsx for example implementation.

NOTE: Use **storybook** to preview your component. Ideally **do not create pages** to test your component. If you do make on, remember to **delete the page before pushing**. Refer src/components/text.tsx and src/stories/text.stories.tsx for examples.

### Reference
Image to page where the component is
(ex: for the input box it could be image of Sign In page)
### Variants (only if the component has variations)
ex:
Primary
(image)
Secondary
(image)
Tertiary
(image)
