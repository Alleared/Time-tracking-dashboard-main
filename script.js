

const workHrs = {
	daily : {
		current: "5hrs",
		previous: "7hrs",
	},
	weekly : {
		current: "32hrs",
		previous: "36hrs",
	},
	monthly : {
		current: "103hrs",
		previous: "128hrs",
	},
}

const playHrs = {
	daily : {
		current: "1hrs",
		previous: "2hrs",
	},
	weekly : {
		current: "10hrs",
		previous: "8hrs",
	},
	monthly : {
		current: "23hrs",
		previous: "29hrs",
	},
}

const studyHrs = {
	daily : {
		current: "0hrs",
		previous: "1hrs",
	},
	weekly : {
		current: "4hrs",
		previous: "7hrs",
	},
	monthly : {
		current: "13hrs",
		previous: "19hrs",
	},

}

const exerciseHrs = {
	daily : {
		current: "1hrs",
		previous: "1hrs",
	},
	weekly : {
		current: "4hrs",
		previous: "5hrs",
	},
	monthly : {
		current: "11hrs",
		previous: "18hrs",
	},

}

const socialHrs = {
	daily : {
		current: "1hrs",
		previous: "3hrs",
	},
	weekly : {
		current: "5hrs",
		previous: "10hrs",
	},
	monthly : {
		current: "21hrs",
		previous: "23hrs",
	},
}

const selfCareHrs = {

	daily : {
		current: "0hrs",
		previous: "1hrs",
	},
	weekly : {
		current: "2hrs",
		previous: "2hrs",
	},
	monthly : {
		current: "7hrs",
		previous: "11hrs",
	}
}

// Change styles between Daily, Weekly and Monthly
const schedule = document.querySelectorAll('.js-schedule');

schedule.forEach(selectedBtn => {
	selectedBtn.onclick = () => {
		scheduleSwitch(selectedBtn);
	};
})

function scheduleSwitch (btn) {
	schedule.forEach(deselectBtn => {
		deselectBtn.classList.remove('selected-schedule')
	})

	btn.classList.add('selected-schedule');
}

// Change Stats between Daily, Weekly and Monthly
const dailySchedule = document.querySelector('.js-daily-schedule');
const weeklySchedule = document.querySelector('.js-weekly-schedule');
const monthlySchedule = document.querySelector('.js-monthly-schedule');

dailySchedule.addEventListener('click', dailyStats);

weeklySchedule.addEventListener('click', weeklyStats);

monthlySchedule.addEventListener('click', monthlyStats);


// Select all the Last Activity Hours 
const lastActivity = document.querySelectorAll('.js-last-activity');

function dailyStats () {

	// Change the Last activity day
	lastActivity.forEach(activity => {
		activity.innerHTML = 'Last day &dash;';
	})

	// Work stats
	document.querySelector('.js-work-hours').innerText = workHrs.daily.current;
	document.querySelector('.js-previous-work-hours').innerText = workHrs.daily.previous;

	// Play stats
	document.querySelector('.js-play-hours').innerText = playHrs.daily.current;
	document.querySelector('.js-previous-play-hours').innerText = playHrs.daily.previous

	// Study stats
	document.querySelector('.js-study-hours').innerText = studyHrs.daily.current;
	document.querySelector('.js-previous-study-hours').innerText = studyHrs.daily.previous;

	// Exercise stats
	document.querySelector('.js-exercise-hours').innerText = exerciseHrs.daily.current;
	document.querySelector('.js-previous-exercise-hours').innerText = exerciseHrs.daily.previous;

	// Social stats 
	document.querySelector('.js-social-hours').innerText = socialHrs.daily.current;
	document.querySelector('.js-previous-social-hours').innerText = socialHrs.daily.previous;

	// Self Care stats 
	document.querySelector('.js-selfCare-hours').innerText = selfCareHrs.daily.current;
	document.querySelector('.js-previous-selfCare-hours').innerText = selfCareHrs.daily.previous;

}

function weeklyStats () {

	// Change the Last activity week
	lastActivity.forEach(activity => {
		activity.innerHTML = 'Last week &dash;';
	})
	
	// Work stats
	document.querySelector('.js-work-hours').innerText = workHrs.weekly.current;
	document.querySelector('.js-previous-work-hours').innerText = workHrs.weekly.previous;

	// Play stats
	document.querySelector('.js-play-hours').innerText = playHrs.weekly.current;
	document.querySelector('.js-previous-play-hours').innerText = playHrs.weekly.previous;

	// Study stats
	document.querySelector('.js-study-hours').innerText = studyHrs.weekly.current;
	document.querySelector('.js-previous-study-hours').innerText = studyHrs.weekly.current;

	// Exercise stats
	document.querySelector('.js-exercise-hours').innerText = exerciseHrs.weekly.current;
	document.querySelector('.js-previous-exercise-hours').innerText = exerciseHrs.weekly.previous;

	// Social stats 
	document.querySelector('.js-social-hours').innerText = socialHrs.weekly.current;
	document.querySelector('.js-previous-social-hours').innerText = socialHrs.weekly.previous;

	// Self Care stats 
	document.querySelector('.js-selfCare-hours').innerText = selfCareHrs.weekly.current;
	document.querySelector('.js-previous-selfCare-hours').innerText = selfCareHrs.weekly.previous;

	
}

function monthlyStats () {

	// Change the Last activity month
	lastActivity.forEach(activity => {
		activity.innerHTML = 'Last month &dash;';
	})
	
	// Work stats
	document.querySelector('.js-work-hours').innerText = workHrs.monthly.current;
	document.querySelector('.js-previous-work-hours').innerText = workHrs.monthly.previous;

	// Play stats
	document.querySelector('.js-play-hours').innerText = playHrs.monthly.current;
	document.querySelector('.js-previous-play-hours').innerText = playHrs.monthly.previous;

	// Study stats
	document.querySelector('.js-study-hours').innerText = studyHrs.monthly.current;
	document.querySelector('.js-previous-study-hours').innerText = studyHrs.monthly.previous;

	// Exercise stats
	document.querySelector('.js-exercise-hours').innerText = exerciseHrs.monthly.current;
	document.querySelector('.js-previous-exercise-hours').innerText = exerciseHrs.monthly.previous;

	// Social stats 
	document.querySelector('.js-social-hours').innerText = socialHrs.monthly.current;
	document.querySelector('.js-previous-social-hours').innerText = socialHrs.monthly.previous;

	// Self Care stats 
	document.querySelector('.js-selfCare-hours').innerText = selfCareHrs.monthly.current;
	document.querySelector('.js-previous-selfCare-hours').innerText = selfCareHrs.monthly.previous;
}

