<?php

class Complex {

	public $real;
    public $imag;
	
	
	
	function __construct($real, $imag=0) {
		$this->real = $real;
		$this->imag = $imag;
	}
	
	public function setR($r) {
        return $this->real=$r;
    }
	public function setI($i) {
        return $this->imag=$i;
    }
	public function getR() {
        return $this->real;
    }
	public function getI() {
        return $this->imag;
    }

	
    public function add(Complex $c2)
    {
        return new Complex($this->real + $c2->getR(), $this->imag + $c2->getI());
    }
    public function sub(Complex $c2)
    {
        return new Complex($this->real - $c2->getR(), $this->imag - $c2->getI());
    }
    public function mul(Complex $c2)
    {
		$a=$this->real;
		$b=$this->imag;
		$c=$c2->getR();
		$d=$c2->getI();
        return new Complex($a*$c-$b*$d, $a*$d+$b*$c);
    }
    public function div(Complex $c2)
    {
		$a=$this->real;
		$b=$this->imag;
		$c=$c2->getR();
		$d=$c2->getI();
        return new Complex(($a*$c+$b*$d)/($c*$c+$d*$d), ($b*$c-$a*$d)/($c*$c+$d*$d));
    }
	
    public function print($capt="")
    {
        echo $capt."(".$this->real.",".$this->imag.")";
    }	
	
}


$c = new Complex(1,2);
$c2 = new Complex(3,4);
$c->print("C1: "); echo "<br>";
$c2->print("C2: "); echo "<br>";
$c->add($c2)->print("Add: "); echo "<br>";
$c->sub($c2)->print("Substr: "); echo "<br>";
$c->mul($c2)->print("Mult: "); echo "<br>";
$c->div($c2)->print("Div: "); echo "<br>";

?>






