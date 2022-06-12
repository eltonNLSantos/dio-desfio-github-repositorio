// C++ code
//
int intensidade = 0;

int i = 0;

void setup()
{
  pinMode(10, OUTPUT);
}

void loop()
{
  intensidade = 0;
  for (intensidade = 0; intensidade <= 255; intensidade += 5) {
    analogWrite(10, intensidade);
    delay(20); // Wait for 20 millisecond(s)
  }
  for (intensidade = 255; intensidade >= 0; intensidade -= 5) {
    analogWrite(10, intensidade);
    delay(20); // Wait for 20 millisecond(s)
  }
}