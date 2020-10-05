<template>
  <transition name="fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <h2>Contact</h2>
          <button
            type="button"
            class="close-btn"
            @click="close"
            aria-label="Close modal"
          >
            <i class="fas fa-times-circle"></i>
          </button>
        </header>
        <section class="modal-body" id="modalDescription">
          <form @submit.prevent>
            <fieldset>
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </fieldset>
            <fieldset>
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </fieldset>
            <fieldset>
              <label for="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
            </fieldset>
            <fieldset>
              <label for="message">Message</label>
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="Message"
                required
              />
            </fieldset>
          </form>
        </section>
        <footer class="modal-footer">
          <button
            type="submit"
            class="send-btn"
            id="send-btn"
            @click="close"
            aria-label="Close modal"
          >
            SEND
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  methods: {
    close() {
      this.$emit('close')
    }
  }
  // updated() {
  //   const name = document.querySelector('#name')
  //   const email = document.querySelector('#email')
  //   const subject = document.querySelector('#subject')
  //   const msg = document.querySelector('#message')
  //   const btn = document.querySelector('#send-btn')

  //   // check on change
  //   name.addEventListener('change', checkInput)
  //   subject.addEventListener('change', checkInput)
  //   msg.addEventListener('change', checkInput)
  //   email.addEventListener('change', checkEmail)

  //   // check on input
  //   name.addEventListener('input', checkInput)
  //   subject.addEventListener('input', checkInput)
  //   msg.addEventListener('input', checkInput)
  //   email.addEventListener('input', checkEmail)

  //   function checkInput(e) {
  //     e.target

  //     const value = e.target.value.trim()

  //     if (value === '') {
  //       setErrorFor(e.target)
  //       check = false
  //     } else {
  //       // add success class
  //       setSuccessFor(e.target)
  //     }
  //   }

  //   // check all inputs fulness on submit
  //   function checkInputs() {
  //     // trim to remove whitespaces
  //     const nameValue = name.value.trim()
  //     const emailValue = email.value.trim()
  //     const subjectValue = subject.value.trim()
  //     const msgValue = msg.value.trim()
  //     // boolean
  //     var check = true

  //     if (nameValue === '') {
  //       // show error
  //       // add error class
  //       setErrorFor(name)
  //       check = false
  //     } else {
  //       // add success class
  //       setSuccessFor(name)
  //     }

  //     if (emailValue === '') {
  //       setErrorFor(email)
  //       check = false
  //     } else {
  //       setSuccessFor(email)
  //     }

  //     if (subjectValue === '') {
  //       setErrorFor(subject)
  //       check = false
  //     } else {
  //       setSuccessFor(subject)
  //     }

  //     if (msgValue === '') {
  //       setErrorFor(msg)
  //       check = false
  //     } else {
  //       setSuccessFor(msg)
  //     }

  //     if (check) {
  //       btn.removeEventListener('click', stopIt)
  //     }

  //     return check
  //   }

  //   function checkEmail(e) {
  //     e.target

  //     const value = e.target.value.trim()

  //     if (!isEmail(value)) {
  //       setErrorFor(e.target)
  //       check = false
  //     } else {
  //       // add success class
  //       setSuccessFor(e.target)
  //     }
  //   }

  //   // what happens when a field is empty
  //   function setErrorFor(input) {
  //     const validation = input.parentElement

  //     //add error class
  //     validation.classList.add('error')
  //     validation.classList.remove('success')
  //   }
  //   // what happens when a field is filled out
  //   function setSuccessFor(input) {
  //     const validation = input.parentElement
  //     validation.classList.add('success')
  //     validation.classList.remove('error')
  //   }

  //   // email validation through regular expression
  //   function isEmail(email) {
  //     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     return re.test(String(email).toLowerCase())
  //   }
  // }
}
</script>

<style lang="scss">
.modal-backdrop {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #212226;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 20px 20px 0 0;

  header,
  footer {
    display: flex;
    align-items: center;
  }

  header {
    color: #42b983;
    justify-content: space-between;
    margin: 0em 0 0.5em 0;
    background-color: #303136;
    padding: 1em 1em;

    .close-btn {
      border: none;
      font-size: 20px;
      cursor: pointer;
      font-weight: bold;
      color: #42b983;
      background: transparent;
    }
  }

  footer {
    justify-content: flex-end;
    padding: 0em 1em 1em 1em;

    .send-btn {
      color: #42b983;
      background: transparent;
      border: 1px solid #42b983;
      padding: 0.5em 1em;
      width: 30%;
      cursor: pointer;
      font-weight: 500;
      font-size: 1.2em;

      &:hover {
        background-color: #42b983;
        color: #3a3d44;
      }
    }
  }
}

.modal-body {
  position: relative;
  padding: 1em;

  fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    margin-bottom: 1.2em;

    &:last-child {
      margin-bottom: 0em;
    }

    label {
      color: #999;
      margin-bottom: 0.3em;
    }

    input {
      border: none;
      padding: 1em;
      background-color: #3a3d44;
      color: #fff;
    }

    textarea {
      border: none;
      padding: 1em;
      background-color: #3a3d44;
      color: #fff;
    }
  }
}

@media (min-width: 64em) {
  .modal-backdrop {
    top: 0;

    .modal {
      width: 50%;
      height: 37.5%;

      border-radius: 20px;
    }
  }
}

@media (min-width: 87em) {
  .modal-backdrop {
    top: 0;

    .modal {
      width: 50%;
      height: 55%;

      border-radius: 20px;
    }
  }
}
</style>
