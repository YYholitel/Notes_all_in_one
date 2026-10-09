- 常见使用的模块有三种 ：  design , stimulation , 
- 设计模块的编写 ，激励模块的编写 ，还有 

```verilog
module counter10(
	input  rstn,
	input clk, 
	output [3:0] cnt ,
	output cout);
	
	reg [3:0]  cnt_temp;
	always@(posedge clk or negedge rstn ) begin
	if (! rstn ) begin 
			cnt_temp  <= 4'b0 ; 
	end 
	else if (cnt_temp == 4'd09) begin
			cnt_temp  <= 4'b0000
	end
	else begin
			cnt_temp   <= cnt_temp + 1'b1;
			
	end
end 

assign cout  = (cnt_temp == 4'd9);
assign cnt = cnt_temp ; 


enmodule 
``` 
## Verilog 数值的表示 
- Verilog有四种表示的电平逻辑：  0 , 1 , x(X)(unknown) , z/Z (高阻)
- 基数格式： 'd ， ‘D (decimal) , ('h ,'H)(hexadecimal) ,('b , 'B)(binary ),('o ,'O)(oxa)
- 带宽： x'  , 带宽可以指派，也可以不
	 - 4'b1011 四 bit数值 ； 
	 - 32'bh3022_c0de 32bit数值 
- 如果不指派bits, 默认32位 
- 下划线用于美观表示 
- 

