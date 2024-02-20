/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT : "15px"
      }
    },
    screens : {
      sm : "640px",
      md : "768px",
      lg : "960px",
      xl : "1330px"
    },
    extend: {
      colors : {
        primary : '#242a2b',
        second : '#808080',
        accent : {
          DEFAULT : '#1cbccf',
          Second : '#18abbc',
          tertiary : '#90c6cd'
        },
        grey : '#e8f0f1',
      },
      fontFamily : {
        primary : 'poppins',
      },
      boxShadow : {
        custom1 : '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2 : '0px 2px 30px 0px rgba(8, 73, 81, 0.06)',
      },
      backgroundImage : {
        services : 'url(../../assets/img/services/bg.svg)',
        testimonials : 'url(../../assets/img/testimonials/bg.svg)',
        departments : 'url(../../assets/img/departments/bg.svg)',
        quouteleft : 'url(../../assets/icons/testimonials/quote-left.svg)',
        quouteright : 'url(../../assets/icons/testimonials/quote-right.svg)',
      }
    },
  },
  plugins: [],
}

