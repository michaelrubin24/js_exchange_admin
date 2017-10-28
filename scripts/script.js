

/*var telephone = prompt("Здравствуйте, введите номер телефона:","не указано");
var address_street = prompt("Улица","не указано");
var address_house = prompt("Номер дома:","не указано");
var address_flat = prompt("Квартира:","не указано");
var sum = +prompt("Сумма которую вы хотите вложить:","не указано");
var procent = +prompt("Процент под который вы хотите вложить деньги:","не указано");
var months = +prompt("На какой срок вы хотите положить свои деньги (кол-во месяцев):","не указано");
var deposit = (sum*procent)/100*months+sum;
var result = alert("Здравствуйте, на номер телефона "+telephone+",\n" + "На адрес: улица "+address_street+", дом " + address_house + ", квартира "+address_flat+"\n" + "Зарегистрирован счёт на сумму: " + sum + ", процент " + procent +",cрок "+ months +" месяцев" + "\n"+"После " + months + " месяцев вы сможете забрать вклад который = " + deposit +"$");*/
var select = prompt(" Какую программу запустить?"+ "\n" + "1. Курс валют (нажмите 1)" + "\n" + "2. Вход в админку (нажмите 2)");

if(select == 1){ // Курс валют

  var dollar = 26, evro = 31, rubl = 0.395;
  var grn = prompt("Сколько гривен вы бы хотели поменять?");

  if(isNaN(grn)){
    alert("Введите число!");
  }
  else{
    var grn_in_dollar = grn/dollar;
    var grn_in_evro = grn/evro;
    var grn_in_rubl = grn/rubl;
    alert("Вы можете получить " + grn_in_dollar + " долларов, " + "или " + grn_in_evro + " в евро, или " + grn_in_rubl + " рублей");
    var money = prompt("В какой валюте хотите получить деньги?");

    if(money == "$" || money == "dollar" || money == "доллар"){
        var answer = confirm("Вы действительно хотите поменять " + grn + " гривен, на " + grn_in_dollar + " долларов?");
        if(answer != true){
          alert("Приходите в другой раз");
        }else{
          alert("спасибо");
        }
    } else if(money == "€" || money == "evro" || money == "евро"){
        var answer = confirm("Вы действительно хотите поменять " + grn + " гривен, на " + grn_in_evro + " евро?");
        if(answer != true){
          alert("Приходите в другой раз");
        }else{
          alert("спасибо");
        }
    } else if(money == "'₽" || money == "rub" || money == "рубль"){
        var answer = confirm("Вы действительно хотите поменять " + grn + " гривен, на " + grn_in_rubl + " рублей?");
        if(answer != true){
          alert("Приходите в другой раз");
        }else{
          alert("спасибо");
        }
      }
      else{
        alert("Неправильный ввод");
      }
  }
}else if(select == 2){ //Вход в админку
  var login = "admin";
  var password = "nice";
  var login_check = prompt("Введите логин:");
  if(login == login_check){
    var password_check = prompt("Введите пароль:");
    if(password == password_check){
      alert("Привет админ!");
    }else{
      alert("Неправильный пароль!");
        }
  }else{
    alert("Неправильный логин!");
  }

}else{
  alert("Неправильный ввод");
}
