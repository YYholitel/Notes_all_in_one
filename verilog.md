# verilog basis 
- wire ,reg ,constant数据类型 ；
- module, enmodule ,类型格式 ； 
- module and_gate ( 
		input a ,
	  input b ,
	  output y 
); 
	assign y = a & b ; 
enmodule ;

## 位宽和向量 
  wire a; 
  wire [7:0 ] data  ;
   wire [3: 0] nibble ;
assign ...

# 数据流建模 ，行为级建模： 
module mux2to1(
	input a , b sel ,
	output y 
);
	assign y = sel ? b  :a ;
enmodule 

## 组合逻辑的行为级建模
module mux2to1(
	input a , b , sel , 
	output reg y 
);
	 always @(* )  begin  

## 时序逻辑的行为级建模 

module dff(
	input clk, 
	 input  d, 
	 output reg q 
);

	always @(posedge clk) begin 
		q <= d; 
	end 
enmodule 
- 组合逻辑里 用  = ， 时序逻辑里面使用  <= , 不要混用 
- always @(* ) 里面的所有分支 都要赋值 ，不然会  latch 
# test bench 
```C++
` timescale 1ns/ 1ps
module tb_full_adder;
	reg a ,b , cin ;
	wire sum ,cout; 
	
	full_adder uut(
		.a(a) ,.b(b) , .cin(cin),
		.sum(sum) .cout(cout)
	);
	
	intial begin  uut ( 
	 .a(a) , .b(b), .cin(cin), 
	 .sum(sum) , cout(cout)
	 	);
	 	
	 	
	intial begin 
		$dumpfile ("wave.vcd") ;
		$dumpvars(0,tb_full_adder);
		
		
		
		
		
	
```

 ```verilog 
 always @(postedge clk) begin 
  a= b ; 
  c =a ;
end 

 always @(postedge clk) begin 
 a <= b ;
 c < = a; 
 
end
 ```
## 循环遍历 
```Verilog 
` timescale 1ns/ 1ps 

module tb_full_adder; 
	reg a, b ,cin ;
	wire sum ,cout ;
	
	full_adder dut(
		.a(a),
		.b(b),
		.cin(cin),
		.sum(sum),
		.cout(cout));
		
	integer  i; 
	reg[2:0] in ;
	
	intial begin 
	 $ dumpfile("wave.vcd");
	 $ dumpvars(0,tb_full_adder) ;
	 
	 for(i = 0 ; i <  8 ; i = i +1 ) begin
	 
		 in = i ;  //转换位数 ，拼接赋值 
		 {a,b,cin} = in; 
		 #10 ;
		 $display("i = %0d | a = %b  b =%b cin  % b => sum=%b cout =%b" ,i ,a,b,cin,sum,cout);
		end 
		$finish; 
	 
	 end
```
``` 
` timescale 1ns/1ps 
...
module full_adder_tb();
	wire a , b , cin ;
	wire sum ,cout ;
	
	reg[1:0] a_tb ;
	reg[1:0] b_tb ;
	reg cin_tb ;
	wire[1:0] sum_tb ;
	wire cout_tb; 
	
	full_adder dut(
		.a(a_tb),
		...);
		
		
	integer i ;
	
initial begin 
 $dumpfile ()	
 $ ...
 
		
		
``