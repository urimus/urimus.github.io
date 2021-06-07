<?php

require_once 'PHPUnit/Framework.php';
require_once 'complex.php';

class complexTest extends PHPUnit_Framework_TestCase {
    public function testConstr()
    {
        $c = new Complex(1);
        $this->assertEquals(1, $c->getR());
        $this->assertEquals(0, $c->getI());
    }
    public function testConstr2()
    {
        $c = new Complex(2,3);
        $this->assertEquals(2, $c->getR());
        $this->assertEquals(3, $c->getI());
    }
	
    public function testAdd()
    {
        $c = new Complex(1,2);
		$c2= new Complex(3,4);
		$c3=$c->add($c2);
        $this->assertEquals(4, $c3->getR());
        $this->assertEquals(6, $c3->getI());
    }
    public function testSub()
    {
        $c = new Complex(1,2);
		$c2= new Complex(3,4);
		$c3=$c->sub($c2);
        $this->assertEquals(-2, $c3->getR());
        $this->assertEquals(-2, $c3->getI());
    }
    public function testMul()
    {
        $c = new Complex(1,2);
		$c2= new Complex(3,4);
		$c3=$c->mul($c2);
        $this->assertEquals(-5, $c3->getR());
        $this->assertEquals(10, $c3->getI());
    }
    public function testDiv()
    {
        $c = new Complex(1,2);
		$c2= new Complex(3,4);
		$c3=$c->mul($c2);
        $this->assertEquals(0.44, $c3->getR());
        $this->assertEquals(0.08, $c3->getI());
    }


}

?>






