# Exam 1 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: What is the difference between a dynamic asset and a static asset?
 A: I think the static asset is something sent to the users that the server does not change, like images, JavaScript files, style sheets.
	  And the dynamic asset is something that keeps changing on a page due to different requests from users, mainly happend in server-side.

## Q: What is the difference between a relative and absolute file path in a URL?  What is the "webserver root" and how does this relate to it?
 A: In my understanding, the absolute file path refers to root directory, while the relative file path refers to current directory.
      The "webserver root" is something that loads when visitors typed in the domain name in a web server. Like the localhost/3000 we used in the class,
      it's an example of webserver root. And this webserver root is exactly the root directory of absolute file path.	  

## Q: What is the difference between server-side and client-side JS?
 A: The client-side JavaScript is mainly working for making responsive website on front-end. It runs on the browser.
       And the server-side JavaScript,also known as Node JS, have a lot of different features than the client-side JavaScript.
	   When we trying to code for client-side, we just simply using JavaScript syntax to develope it. While before coding for
	   server-side, we need to install the Node JS package at first and set environment variables. And it does not need interaction
	   with the server.

## Q: What are the differences between `var`, `const`, and `let`, and when should you use each of them?
 A： Though all of them are used to declare a variable,
 ..* **var** is function scoped, when it comes to hoisting, the value is undefined.
 ..* **let** is block scoped, when it comes to hoisting, there will has a reference error.
 ..* **const** is similar to let, it's block scoped and when it comes to hoisting, there will has a reference error. Apart from that, `const` variable can't reassign value, but it can modify the property/value of a const object.

## Q: What are the 4 ways to create inheritance? (no examples needed, just a sentence describing each)
A: 1. use `call()` method when building the child's constructor
2. _prototype inheritance_ use `child.prototype=new parent()` to inheritant
3. use `object.create()` to inheritant
4. use `child.prototype._proto_=parent.prototype` to inheritant


## Q: Give a demonstration of 1 way to create JS inheritance to _inherit_ a method named "purr".
A: ` var o={
	purr:function(){
	 console.log("o\'s function: purr").
	}
}

	var p=Object.create(o);
	console.log(o.purr());//output: o's function:purr;
	`
## Q: Give a demonstration of a different way to create JS inheritance to _inherit_ a method named "hiss".
A: `function Parent(){
	hiss:function(){
		console.log("parent has a function named hiss")
		}
	};
 let child=new Parent();
 console.log(child.hiss());
`
## Q: Explain this sentence: "In CSS, you can select an element based on its ancestors, but you can't select an element based on its descendants"  Make an example and say a concept that cannot be selected.
A:
1. In my opinion, when you only choose an element based on its descendants, the browser or compiler would confused about which element you really want to choose, considering there might have other element's name the same as the descendants name.
2. For example, there are
  ```li{list-style-type:disc;}```
  And
  ```li li{list-style-type:circle;}```
  if I only use _li_ to select element, the compiler can't figure out if I want li, or the list descendant of list.

## Q: Explain what a callback is, and give an example.
A:1. Callback is a function that called by another function/object, and execute after another function has finished executing
2. example:
`function A(name,callback){
	alert(`start ${name}.`);
	callback();
}

 A('Jane',function(){alert("Finished!");});
`

## Q: In CSS, what does it mean "You shouldn't name your classes after what they will appear like"?   Why?  Give an example of a class that is well named and a class that is poorly named.
A:
	I think it might make the reader confused, hard to read and not good for re-use or further development especially a large project.
	Example:  
	bad: .button{}
	good: .button-submit{}
