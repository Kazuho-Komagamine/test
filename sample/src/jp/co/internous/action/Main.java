package jp.co.internous.action;

public class Main {
	public static void main(String[] args){
		System.out.println("Hello World");
		System.out.println(gokei());
		System.out.println(gokei2(10, 10));
	}

	public static int gokei(){
		return 1 + 1;
	}

	public static int gokei2(int num1, int num2){
		return num1 + num2;
	}


}
