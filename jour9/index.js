// AUJOURD'HUI//

function whatDayIsToday() {
    var date = new Date()
    var today = date.getDay()
    var jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]

    console.log(`Aujourd'hui nous sommes ${jours[today]}`)
}

whatDayIsToday()

// MOIS COURANT//

function whatMonthIsIt() {
    var date = new Date()
    var month = date.getMonth()
    var mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"]


    console.log(`Nous sommes au mois de ${mois[month]}`)
}

whatMonthIsIt()

//FORMAT//

function formatDate(){
    var date = new Date("2021-10-11")
    var today = date.getDate()
    var month = date.getMonth() + 1
    var years = date.getFullYear()

    if(today<10) {

        console.log(`Nous sommes au mois de 0${today}/${month}/${years} `)
    } 
    
    if(month<10){

        console.log(`Nous sommes au mois de ${today}/0${month}/${years} `)
    }else{
        console.log(`Nous sommes au mois de ${today}/${month}/${years} `)
    }

}

formatDate()

//AGE//

function calculateAge() {
    var date = new Date()
    var birth = new Date("1998-10-23")
    var birthdays = date.getFullYear()-birth.getFullYear()

    
    if(date.getMonth()<birth.getMonth()) {
        birthdays-= 1
    }else if(date.getMonth()=== birth.getMonth() && date.getDate()<birth.getDate()){
        birthdays-= 1
    }
    
    console.log(birthdays)
}

calculateAge()