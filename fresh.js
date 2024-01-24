const correctAnswers = ['B','A','B','B','C','D','C','C','B','D']

const form = document.querySelector('.test-form')

const button = document.querySelector('button')

const result = document.querySelector('.result')

// const span = result.querySelector('span')

button.addEventListener('click', (e) => {
    e.preventDefault();
   const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value]

   let score = 0;
   
   userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
        score += 10
    }
    return score;
   })

//    span.textContent = `${score}%`;

   scrollTo(0,0)
   result.classList.remove('d-none');

   let output = 0

   
   const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`

    if(output === score){
        clearInterval(timer)
    }
    else{
        output++
    }
   }, 20)
})