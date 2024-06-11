# Frontend Mentor - Contact Form

Esta é uma solução para o [Contact form](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges ajudá-lo a melhorar suas habilidades de codificação criando projetos realistas.

## Overview

### Screenshot

![Desktop](.github/desktop1.png)
![Mobile](.github/mobile1.png)

### Links

- Solution URL: [Add solution URL here]([https://contac-form-pi.vercel.app/])

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Desafio junior usando  HTML, CSS e javaScript foi um pouco demorando para resolução da logica

```html
 <div class="formName">
            <div>
              <label for="firstName">First Name <span>*</span></label>
              <input type="text" name="firstName" id="firstName" />
              <span class="span-required" id="span-error"></span>
            </div>
            <div>
              <label for="lastName">Last Name <span>*</span></label>
              <input type="text" name="lastName" id="lastName" />
              <span class="span-required" id="span-error"></span>
            </div>
          </div>
          <div class="formEmail">
            <label for="email">E-mail adress <span>*</span></label>
            <input type="email" name="email" id="email" />
            <span class="span-required" id="span-error"></span>
          </div>
```

```css
.proud-of-this-css {
   .container {
  display: grid;
  justify-content: center;
  align-items: center;
}

.container .wrapprer {
  background-color: var(--White-);
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 1.5rem;
  position: relative;
  margin-top: 6rem;
}

.container .wrapprer .title {
  font-size: 2rem;
  font-weight: bold;
}

.container .wrapprer .formName {
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}
}
```

### Continued development

Especilizando-se em Reactjs e Web3

## Author

- Website - [Joelson Silva](https://joelson-portfollio.vercel.app/)
- Frontend Mentor - [@JoeSeraphy](https://www.frontendmentor.io/profile/JoeSeraphy)
