$ ->
	#定义变量
	#num = 2

	#定义数组
	#list = [1..5]

	#定义对象
	#obj =
	#	name : "john"
	#	age : 3
	#	smallobj :
	#		smallone : "a"
	#		smalltwo : "b"

	#boj = name : 1 , age : 2

	#定义数组对象
	#obj_List = [obj,obj]

	#if相关
	# if_one = if_two if num

	# if num is 2
	# 	console.log("is会编译为===")
	# else if list
	# 	console.log("这是else if判断")
	# else
	# 	console.log("这是else")

	#三元判断
	#if_One = if if_two then if_three else if_four

	#循环相关
	# for item,i in list
	# 	console.log (item)

	#对象循环
	# for item,i in obj_List
	# 	console.log (item)
	# 	console.log (item.age)

	#定义函数
	# _fn =() ->
	# 	console.log "这是一个函数"
	# 	true

	#带参数的函数
	# _objFn =(x,y="未传参数") ->
	# 	console.log x+"|"+y
	# 	true

	#使用jquery
	#$(".max").addClass "jqueryAdd"

	#不定传参
	_numFn=(first...) ->
		console.log(first)
		true
	# _numFn(1,1,2,3)


	true

# define((require, exports, module)->
# 	require('../jquery')
# 	doThing = require('sea-function')
# 	doThing.doSomething()
# 	true
# )
