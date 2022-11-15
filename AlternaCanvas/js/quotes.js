var quotes = [
  "“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein",
  "“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi",
  "“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain",
  "“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale",
  "“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson",
  "“Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus. “ — Alexander Graham Bell",
  "“Either you run the day or the day runs you.” — Jim Rohn",
  "“I’m a greater believer in luck, and I find the harder I work the more I have of it.” — Thomas Jefferson",
  "“When we strive to become better than we are, everything around us becomes better too.” — Paulo Coelho",
  "“Opportunity is missed by most people because it is dressed in overalls and looks like work.” — Thomas Edison",
  "“Setting goals is the first step in turning the invisible into the visible.” — Tony Robbins",
  "“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.” — Steve Jobs",
  "We don’t just sit around and wait for other people. We just make, and we do.” — Arlan Hamilton",
  "“You've got to get up every morning with determination if you're going to go to bed with satisfaction.” — George Lorimer",
  "“Education is the most powerful weapon which you can use to change the world.” — Nelson Mandela",
  "“The most difficult thing is the decision to act, the rest is merely tenacity.” —Amelia Earhart",
  "“You’ll find that education is just about the only thing lying around loose in this world, and it’s about the only thing a fellow can have as much of as he’s willing to haul away.” —John Graham",
  "“Take the attitude of a student, never be too big to ask questions, never know too much to learn something new.” —Augustine Og Mandino",
];

function generateQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  if (document.getElementById("quote") !== null) {
    document.getElementById("quote").innerHTML = quotes[randomNumber];
  }
}

window.onload = generateQuote;
