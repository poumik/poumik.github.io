function jarjestaNumerot()
{
  var luku1, luku2, luku3;
  luku1 = parseInt(document.getElementById('first').value);
  luku2 = parseInt(document.getElementById('second').value);
  luku3 = parseInt(document.getElementById('third').value);
  if(luku1 < luku2 && luku1 < luku3)
  {
    if(luku2 < luku3)
    {
      alert("Lukujen järjestys: " + luku1 + ' ' + luku2 + ' ' + luku3);
    }
    else {
      alert("Lukujen järjestys: " + luku1 + ' ' + luku3 + ' ' + luku2);
    }
  }
  else if(luku2 < luku1 && luku2 < luku3)
  {
    if(luku1<luku3)
    {
      alert("Lukujen järjestys: " + luku2 + ' ' + luku1 + ' ' + luku3);
    }
    else {
      alert("Lukujen järjestys: " + luku2 + ' ' + luku3 + ' ' + luku1);

    }
  }
  else if(luku3 < luku1 && luku3 < luku2)
    {
      if(luku1 < luku2)
      {
        alert("Lukujen järjestys on: " + luku3 + ' ' + luku1 + ' ' + luku2);
      }
      else {
        alert("Lukujen järjestys on: " + luku3 + ' ' + luku2 + ' ' + luku1);

      }
    }
  }
  function suurinLuku()
  {
    var l1, l2, l3, l4, l5, suurin;
    l1 = parseInt(document.getElementById('luku1').value);
    l2 = parseInt(document.getElementById('luku2').value);
    l3 = parseInt(document.getElementById('luku3').value);
    l4 = parseInt(document.getElementById('luku4').value);
    l5 = parseInt(document.getElementById('luku5').value);
    if(l1 < l2 && l3 < l2 && l4 < l2 && l5 < l2)
    {
      suurin = l2;
    }
    else if(l1 < l3 && l4 < l3 && l5 < l3)
    {
      suurin = l3;
    }
    else if(l1 < l4 && l5 < l4)
    {
      suurin = l4;
    }
    else if(l1 < l5)
    {
      suurin = l5;
    }
    else {
      suurin = l1;
    }
    alert("Suurin luku on: " + suurin);
  }
  function paritonParillinen()
  {
    var arvo;
    arvo = parseInt(document.getElementById('luku').value);
    if(arvo%2 == 0)
    {
      alert("Antamasi luku on parillinen");
    }
    else {
      alert("Antamasi luku on pariton");
    }
  }
  function ajoOikeus()
  {
    var age = parseInt(document.getElementById('ika').value);
    if(age < 16)
    {
      alert("Saat ajaa polkupyörää");
    }
    else if(age < 18)
    {
      alert("Saat ajaa mopoa");
    }
    else {
      alert("Saat ajaa autoa");
    }
  }
  function kaantaja()
  {
    var lang = document.getElementById('language').value;
    if(lang == 'en')
    {
      alert("Hello world!");
    }
    else if(lang == 'sw')
    {
      alert("Hej världen!");
    }
    else {
      alert("Hola Mundo!");
    }
  }
