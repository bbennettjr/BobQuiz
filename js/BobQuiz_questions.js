		var guysQuestions = [{prompt: "What is Bob's real age?", choices: ["Too old to care", 65, "Science can't measure back that far", 56, "Go ahead, ask him"], correctAnswer: 4},
		{prompt: "Bob's personality is best described as:", choices: ["Cuddly", "Loveable", "Huggable", "Snuggly", "Nuzzlebug"], correctAnswer: 4},
		{prompt: "What does Bob care about most?", choices: ["His family", "His son-in-law", "His quiet time", "His dog", "Long bike rides"], correctAnswer: 0},
		{prompt: "What is Bob's favorite inanimate object?", choices: ["Chapstick", "McDonald's fries", "Steins", "Grapes", "Bottle Caps"], correctAnswer: 2},
		{prompt: "What is Bob's favorite brand?", choices: ["Arc'teryx", "The North Face", "Patagonia", "Marmot", "Eddie Bauer"], correctAnswer: 3},
		{prompt: "If Bob were an internet Meme:", choices: ["I wish sarcasm was available as a font.", "Hide your kids, hide your wife...and hide your husband.", "I don't have a bucket list but my fucket list is a mile long.", "We ate riiibs wit dis dude!", "Ain't nobody got time for that!"], correctAnswer: 0},
		{prompt: "Which would embarrass Bob most?", choices: ["Sleeping on Brad's couch", "Coming in last in a race", "Showing affection to Brad", "Riding a beach cruiser bike", "Caught singing Beyonce in the shower"], correctAnswer: 1},
		{prompt: "In a past life Bob was:", choices: ["Rodeo clown", "Research test subject", "King of a small island", "Survivor winner", "Vegan"], correctAnswer: 1},
		{prompt: "How would Bob describe his soon to be son-in-law?", choices: ["Like, so cool", "Freaking loud", "\"Touchey\"", "Wuss", "Knowitall"], correctAnswer: 2},
		{prompt: "If Bob were an iced cream:", choices: ["Rocky Road", "Cherry Vanilla", "Mint Chocolate Chip", "Mouse Tracks", "Spumoni"], correctAnswer: 3},
		{prompt: "Bob could kill which of these without mercy?", choices: ["Fly", "Ant", "Spider", "Mosquito", "Brad's heart"], correctAnswer: 4},
		{prompt: "Who would Bob turn to for help?", choices: ["Diane", "Kristen", "Elise", "Brad", "Nobody, you're all worthless."], correctAnswer: 1},
		{prompt: "What could Bob comfortably leave out of his daily routine?", choices: ["Brushing", "Clean undies", "Socks", "Morning grumpiness", "Coffee"], correctAnswer: 2},
		{prompt: "Bob's favorite Mickey trick:", choices: ["Sit", "Roll-over", "Shake", "Stay", "Bite Brad"], correctAnswer: 3},
		{prompt: "If Bob were a dad quote:", choices: ["\“Any man can be a father, but it takes someone special to be a dad.\”", "\“Having children is like living in a frat house — nobody sleeps, everything’s broken, and there’s a lot of throwing up.\”", "\“My daughter got me a ‘World’s Best Dad’ mug. So we know she’s sarcastic.\”", "\“Fatherhood is great because you can ruin someone from scratch.\”", "\"Dad always thought laughter was the best medicine, which I guess is why several of us died of tuberculosis.\""], correctAnswer: 3},
		{prompt: "If Bob wrote a play with Mickey as the lead, Mickey's character would be:", choices: ["Prince Mickerson", "Lord Micktenstein", "Count Mickers", "Sir Mickey, Knight of the Hound Table", "King Fluffy Pants"], correctAnswer: 3},
		{prompt: "What does Bob check out about himself in the mirror?", choices: ["Tensed buns", "Smooth scalp", "Flexed abs", "Slender tri's", "Toned back"], correctAnswer: 0},
		{prompt: "What is Bob's spirit animal?", choices: ["Eagle", "Dolphin", "Llama", "Shark", "Bear"], correctAnswer: 4},
		{prompt: "If Bob is feeling witty he'd say:", choices: ["Life's disappointments are harder to take when you don't know any swear words.", "I wish more people were fluent in silence.", "The only mystery in life is that kamikaze pilots wore helmets.", "Not only is there no God, but try finding a plumber on Sunday. ", "A closed mouth gathers no feet."], correctAnswer: 1},
		{prompt: "Bob's favorite type of hug:", choices: ["One-armed hug", "Bear-hug", "Side-hug", "Stiff-hug", "Wiggle-hug"], correctAnswer: 0},
		{prompt: "On a daily basis Bob most identifies with:", choices: ["Buddy the Elf", "Robin Hood", "Prince Humperdinck", "Cosmo Kramer", "Michael Scott"], correctAnswer: 2},
		{prompt: "Bob's celeb crush:", choices: ["Bruce Willis", "Vin Diesel", "Jason Statham", "Howie Mandel", "Patrick Stewart"], correctAnswer: 1}];

		var cousinQuestions = [];
		var edRichQuestinos = [];
		var royaltyQuestions = [];

		// Quiz Object
		function Quiz(name, questions) {
			this.name = name;
			this.questions = questions;
			this.correctAnswers = this.setCorrectAnswers();
			this.answers = new Array();
			this.currentQuestion = 0;
			//Set correct answers
			var setCorrectAnswers = function(questions) {
				var corAns = new Array();
				var i = 0;
				for (i; i < questions.length; i++) {
					corAns[i] = questions[i].correctAnswer;
				}
				return corAns;
			}
			//Get current correct answer
			this.getCurrentCorrectAnswer = function() {
				return this.correctAnswers[this.currentQuestion];
			}
			//Set current question
			this.setCurrentQuestion = function() {
				this.currentQuestion++;
			}
			//Add new answer
			this.addNewAnswer = function(ans) {
				this.answers.push(ans);
			}
		}

		// Quiz Applet Object
		function QuizApplet(myQuiz) {
			this.quizes = [myQuiz];
			this.displayedQuiz;
			//Add new quiz to applet
			this.addQuiz = function(quiz) {
				this.quizes.push(quiz);
			}
			//Display correct quiz
			//...enumerate the quiz names and check for compatability then display the current one
		}

		// Our Quizes
		var guyQuiz = new Quiz("The Guys", guysQuestions);
		var cousinQuiz = new Quiz("John, Corinna & the Girls", cousinQuestions);
		var edRichQuiz = new Quiz("Ed & Rich", edRichQuestinos);
		var royaltyQuiz = new Quiz("The Royalty", royaltyQuestions);

		// Quiz Applet
		var quizApplet = new QuizApplet(guyQuiz);
		quizApplet.addQuiz(cousinQuiz);
		quizApplet.addQuiz(edRichQuiz);
		quizApplet.addQuiz(royaltyQuiz);



