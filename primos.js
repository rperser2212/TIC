function comprobarsiesprimo (numero)
{
  var esPrimo;
  var i;
  for (i=numero-1; i>=2;i=i-1)
    {
      if (numero % i ==0)
      {
        esPrimo = false;
        return esPrimo;
      }
    }
  esPrimo = true;
  return esPrimo;
}
