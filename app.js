/* =============================================
   DATA DEFINTION
============================================= */
const lectures = [
    {
        id: '1_2', title: "المحاضرتين الأولى والثانية", questions: [
            { text: `Google developed Dart in 2011 as an alternative to javascript<div class="ar-text">طورت Google لغة Dart في عام 2011 كبديل لـ javascript.</div>`, type: "tf", answer: true, feedback: '<span class="q-source">المصدر: صفحة 2، قسم "Dart History"</span>' },
            { text: `Dart 3.0 was released in May 2023 and it gained popularity in recent days because of flutter.<div class="ar-text">تم إصدار Dart 3.0 في مايو 2023 واكتسبت شعبية في الأيام الأخيرة بسبب Flutter.</div>`, type: "tf", answer: true, feedback: '<span class="q-source">المصدر: صفحة 2، قسم "Dart History"</span>' },
            { text: `Dart ignores spaces, tabs, and newlines that appear in programs. You can use spaces, tabs, and newlines freely in your program...<div class="ar-text">تتجاهل Dart المسافات وعلامات الجدولة والأسطر الجديدة التي تظهر في البرامج. يمكنك استخدام المسافات وعلامات الجدولة والأسطر الجديدة بحرية في برنامجك...</div>`, type: "tf", answer: true, feedback: '<span class="q-source">المصدر: صفحة 13</span>' },
            { text: `Numbers in Dart are used to represent numeric literals. The Number Dart come in three flavours – integer , double and float<div class="ar-text">تُستخدم الأرقام في Dart لتمثيل القيم الرقمية الحرفية. تأتي أرقام Dart بثلاث نكهات (أنواع) - عدد صحيح (integer)، ومزدوج (double)، وعائم (float).</div>`, type: "tf", answer: false, feedback: 'خطأ. Dart has two flavours: Integer and Double.<span class="q-source">المصدر: صفحة 14</span>' },
            { text: `Consider the following example −<div class="q-code">void main() {\n  String name = 1;\n}</div>The above snippet will output:<div class="q-output-block">Warning: A value of type 'String' cannot be assigned to a variable of type 'int'</div><div class="ar-text">ضع في اعتبارك المثال التالي... سينتج عن المقتطف أعلاه المخرج التالي: تحذير: لا يمكن تعيين قيمة من النوع 'String' لمتغير من النوع 'int'.</div>`, type: "tf", answer: true, feedback: '<span class="q-source">المصدر: صفحة 16</span>' },
            { text: `All uninitialized variables have an initial value of zero. This is because Dart considers all values as objects. The following example illustrates the same:<div class="q-code">void main() {\n  int num;\n  print(num);\n}</div>Output:<div class="q-output-block">0</div><div class="ar-text">جميع المتغيرات غير المهيأة لها قيمة أولية تساوي صفرًا. هذا لأن Dart تعتبر جميع القيم كائنات. يوضح المثال التالي ذلك... المخرج: 0</div>`, type: "tf", answer: false, feedback: 'خطأ. القيمة هي null وليست 0.<span class="q-source">المصدر: صفحة 16</span>' },
            { text: `Consider the following example:<div class="q-code">void main() {\n  var obj =;\n  for (var prop in obj) {\n    print(obj[prop]);\n  }\n}</div>It should produce the following output:<div class="q-output-block">12\n13\n14</div><div class="ar-text">ضع في اعتبارك المثال التالي... يجب أن ينتج المخرجات التالية: 12، 13، 14</div>`, type: "tf", answer: false, feedback: 'خطأ. الكود الصحيح هو print(prop).<span class="q-source">المصدر: صفحة 32</span>' },
            { text: `You can use "\${}" can be used to interpolate the value of a Dart expression within strings. The following example illustrates the same.<div class="q-code">void main() {\n  int n=1+1;\n  String str1 = "The sum of 1 and 1 is \${n}";\n  print(str1);\n  String str2 = "The sum of 2 and 2 is \${2+2}";\n  print(str2);\n}</div>It will produce the following output:<div class="q-output-block">The sum of 1 and 1 is 2\nThe sum of 2 and 2 is 4</div><div class="ar-text">يمكنك استخدام "\${}" لإقحام قيمة تعبير Dart داخل النصوص. يوضح المثال التالي ذلك... سينتج المخرجات التالية...</div>`, type: "tf", answer: true, feedback: '<span class="q-source">المصدر: صفحة 39</span>' },
            { text: `The syntax for declaring a Growable List is given below. The syntax creates a list of the specified size. The list cannot grow or shrink at runtime.<div class="q-code">var list_name = new List(initial_size)</div><div class="ar-text">بناء الجملة للإعلان عن قائمة قابلة للنمو (Growable List) معطى أدناه. ينشئ هذا النحو قائمة بالحجم المحدد. لا يمكن للقائمة أن تنمو أو تتقلص في وقت التشغيل.</div>`, type: "tf", answer: false, feedback: 'خطأ. هذا تعريف Fixed Length List.<span class="q-source">المصدر: صفحة 42</span>' },
            { text: `The output of the next Dart Code:<div class="q-code">void main() {\n  var lst = new List(3);\n  lst = 12;\n  lst = 13;\n  lst = 11;\n  print(lst);\n}</div>and<div class="q-code">void main() {\n  var num_list =;\n  print(num_list);\n}</div>will produce the following output:<div class="q-output-block"></div><div class="ar-text">ناتج كود Dart التالي... سينتج المخرجات التالية...</div>`, type: "tf", answer: true, feedback: '<span class="q-source">المصدر: صفحة 42</span>' },
            { text: `The return_type can be any valid data type. The return statement is optional. If not specified the function returns null;<div class="ar-text">يمكن أن يكون return_type أي نوع بيانات صالح. عبارة return اختيارية. إذا لم يتم تحديدها، فإن الدالة تُرجع null.</div>`, type: "tf", answer: true, feedback: '<span class="q-source">المصدر: صفحة 50</span>' },
            { text: `All required parameters in a function must occur before optional parameters.<div class="ar-text">يجب أن تأتي جميع المعاملات (Parameters) المطلوبة في الدالة قبل المعاملات الاختيارية.</div>`, type: "tf", answer: true, feedback: '<span class="q-source">المصدر: صفحة 53</span>' },
            { text: `Dart is a client-optimized... to build apps fast for many platforms like android and iOS only.<div class="ar-text">لغة Dart هي لغة برمجة حديثة وموجهة للكائنات ومحسّنة للعميل لبناء تطبيقات سريعة للعديد من المنصات مثل android و iOS فقط.</div>`, type: "tf", answer: false, feedback: 'خطأ. تدعم منصات متعددة.<span class="q-source">المصدر: صفحة 2</span>' },
            { text: `Google developed Dart as a programming language.<div class="ar-text">طورت Google لغة Dart كلغة برمجة.</div>`, type: "tf", answer: true, feedback: '<span class="q-source">المصدر: صفحة 2</span>' },
            { text: `Dart is a framework that uses Flutter programming language.<div class="ar-text">Dart هو إطار عمل يستخدم لغة برمجة Flutter.</div>`, type: "tf", answer: false, feedback: 'خطأ. Flutter هو الإطار الذي يستخدم Dart.<span class="q-source">المصدر: صفحة 2</span>' },
            { text: `Dart is a platform-independent language and supports almost every operating system such as windows, mac, and Linux.<div class="ar-text">Dart هي لغة مستقلة عن المنصة وتدعم تقريبًا كل نظام تشغيل مثل windows و mac و Linux.</div>`, type: "tf", answer: true, feedback: '<span class="q-source">المصدر: صفحة 6</span>' },
            { text: `Yes, you can use DartPad to run simple dart programs... For bigger projects, using DartPad is recommended.<div class="ar-text">نعم، يمكنك استخدام DartPad لتشغيل برامج dart بسيطة من هاتفك دون تثبيت أي برنامج. للمشاريع الأكبر، يوصى باستخدام DartPad.</div>`, type: "tf", answer: false, feedback: 'خطأ. للمشاريع الكبيرة ينصح باستخدام IDEs.<span class="q-source">المصدر: صفحة 5</span>' },
            { text: `var automatically determines the type at initialization and cannot be changed afterward. dynamic allows changing the type at runtime.<div class="ar-text">يحدد var النوع تلقائيًا عند التهيئة ولا يمكن تغييره بعد ذلك. يسمح dynamic بتغيير النوع في وقت التشغيل.</div>`, type: "tf", answer: true, feedback: '<span class="q-source">المصدر: صفحة 16-17</span>' },
            { text: `var infers the type at compile-time, contributing to better performance. dynamic may lead to lower performance due to type changes at runtime.<div class="ar-text">يستنتج var النوع في وقت الترجمة (compile-time)، مما يساهم في أداء أفضل. قد يؤدي dynamic إلى انخفاض الأداء بسبب تغييرات النوع في وقت التشغيل.</div>`, type: "tf", answer: true, feedback: '<span class="q-source">المصدر: استنتاجاً من صفحة 11</span>' },
            { text: `var, like final, is used to declare a variable. It is a data type at all.<div class="ar-text">var، مثل final، تستخدم للتصريح عن متغير. إنها نوع بيانات في حد ذاتها.</div>`, type: "tf", answer: false, feedback: 'خطأ. var هي كلمة مفتاحية وليست نوع بيانات.<span class="q-source">المصدر: صفحة 16</span>' },
            { text: `The const keyword is used to represent a compile-time constant. Variables declared using the const keyword are implicitly final.<div class="ar-text">يتم استخدام الكلمة المفتاحية const لتمثيل ثابت في وقت الترجمة. المتغيرات المعلنة باستخدام الكلمة المفتاحية const هي final ضمنيًا.</div>`, type: "tf", answer: true, feedback: '<span class="q-source">المصدر: صفحة 17</span>' },
            { text: `“var” is not a variable type itself, while “dynamic” is...<div class="ar-text">"var" ليس نوع متغير بحد ذاته، بينما "dynamic" كذلك...</div>`, type: "tf", answer: true, feedback: '<span class="q-source">المصدر: صفحة 15-16</span>' },
            { text: `The ? symbol is contract between you and Dart... If you don’t assign a value... Dart will throw an error.<div class="ar-text">الرمز ? هو عقد بينك وبين Dart... أنت تخبر Dart أنك ستقوم بتعيين قيمة للمتغير قبل استخدامه...</div>`, type: "tf", answer: true, feedback: '<span class="q-source">المصدر: صفحة 43</span>' },
            { text: `Dart allows you to use named parameters to clarify the parameter’s meaning in function calls. Curly braces {} are used to specify named parameters.<div class="ar-text">تسمح لك Dart باستخدام المعاملات المسماة (named parameters) لتوضيح معنى المعامل في استدعاءات الدالة. تُستخدم الأقواس المعقوفة {} لتحديد المعاملات المسماة.</div>`, type: "tf", answer: true, feedback: '<span class="q-source">المصدر: صفحة 52</span>' },
            { text: `Not every function needs a name. If you remove the return type and the function name, the function is called Arrow function.<div class="ar-text">ليست كل دالة تحتاج إلى اسم. إذا قمت بإزالة نوع الإرجاع واسم الدالة، تسمى الدالة دالة السهم (Arrow function).</div>`, type: "tf", answer: true, feedback: '<span class="q-source">المصدر: صفحة 54</span>' },
            { text: `Dart Features<div class="ar-text">ميزات Dart</div>`, type: "mcq", options: ["Can compile to either native code or javascript.", "Offers modern programming features like null safety and asynchronous programming.", "You can even use Dart for servers and backend.", "All of the mentioned"], answer: 3, feedback: '<span class="q-source">المصدر: الصفحة 2</span>' },
            { text: `A plethora of IDEs support scripting in Dart. Examples include ……………………………… from Jet brains.<div class="ar-text">تدعم مجموعة كبيرة من بيئات التطوير المتكاملة (IDEs) البرمجة النصية في Dart. تشمل الأمثلة ................................ من Jet brains.</div>`, type: "mcq", options: ["Eclipse", "IntelliJ", "WebStorm", "All of the mentioned"], answer: 3, feedback: '<span class="q-source">المصدر: الصفحة 5</span>' },
            { text: `The ……………….. tool compiles Dart code to JavaScript. Compiling Dart code to JS enables running the Dart script on browsers that do not support the Dart VM. The dart2js tool is shipped as a part of the Dart SDK and can be found in the /dartsdk/bin folder.<div class="ar-text">تقوم أداة .................... بتجميع كود Dart إلى JavaScript. يتيح تجميع كود Dart إلى JS تشغيل نص Dart البرمجي على المتصفحات التي لا تدعم Dart VM. يتم شحن أداة dart2js كجزء من Dart SDK ويمكن العثور عليها في المجلد /dartsdk/bin.</div>`, type: "mcq", options: ["dart2js", "js2dart", "dartjs", "None of the mentioned"], answer: 0, feedback: '<span class="q-source">المصدر: الصفحة 8</span>' },
            { text: `A Dart program is composed of −<div class="ar-text">يتكون برنامج Dart من -</div>`, type: "mcq", options: ["Variables and Operators", "Classes and Functions", "Expressions and Programming Constructs", "All of the mentioned"], answer: 3, feedback: '<span class="q-source">المصدر: الصفحة 8</span>' },
            { text: `The data types ………………………………….are used to represent a collection of objects.<div class="ar-text">تستخدم أنواع البيانات ................................ لتمثيل مجموعة من الكائنات.</div>`, type: "mcq", options: ["list", "map", "String", "A and B"], answer: 3, feedback: '<span class="q-source">المصدر: الصفحة 41 و 46</span>' },
            { text: `The …………………. library enables creation and manipulation of these collections through the predefined List and Map classes respectively.<div class="ar-text">تتيح مكتبة ...................... إنشاء ومعالجة هذه المجموعات من خلال فئات List و Map المحددة مسبقًا على التوالي.</div>`, type: "mcq", options: ["dart: collection", "dart: core", "core: dart", "None of the mentioned"], answer: 1, feedback: '<span class="q-source">المصدر: الصفحة 41</span>' },
            { text: `Dart is an optionally typed language. If the type of a variable is not explicitly specified, the variable’s type is ……………………………..<div class="ar-text">Dart هي لغة اختيارية النوع (optionally typed). إذا لم يتم تحديد نوع المتغير بشكل صريح، فإن نوع المتغير هو ...........................</div>`, type: "mcq", options: ["dynamic.", "var", "object", "None of the mentioned"], answer: 0, feedback: '<span class="q-source">المصدر: الصفحة 15</span>' },
            { text: `Identifiers cannot contain spaces and special characters, except the ………………………………<div class="ar-text">لا يمكن أن تحتوي المعرفات (Identifiers) على مسافات وأحرف خاصة، باستثناء ................................</div>`, type: "mcq", options: ["underscore (_)", "dollar ($) sign.", "A and B", "None of the mentioned"], answer: 2, feedback: '<span class="q-source">المصدر: الصفحة 12</span>' },
            { text: `Dart supports ……………………… by prefixing the variable name with the data type. Type-checking ensures that a variable holds only data specific to a data type.<div class="ar-text">تدعم Dart ........................... ببدء اسم المتغير بنوع البيانات. يضمن التحقق من النوع أن المتغير يحمل فقط البيانات الخاصة بنوع بيانات معين.</div>`, type: "mcq", options: ["type-checking", "", "A and B", "None of the mentioned"], answer: 0, feedback: '<span class="q-source">المصدر: الصفحة 11</span>' },
            { text: `The syntax of final Keyword<div class="ar-text">بناء الجملة (Syntax) للكلمة المفتاحية final</div>`, type: "mcq", options: ["final variable_name", "final data_type variable_name", "A Or B", "None of the mentioned"], answer: 2, feedback: '<span class="q-source">المصدر: الصفحة 17</span>' },
            { text: `The s yntax of const Keyword<div class="ar-text">بناء الجملة (Syntax) للكلمة المفتاحية const</div>`, type: "mcq", options: ["const variable_name", "const data_type variable_name", "A Or B", "None of the mentioned"], answer: 2, feedback: '<span class="q-source">المصدر: الصفحة 17</span>' },
            { text: `The following example shows how you can use conditional expression in Dart −<div class="q-code">void main() {\nvar a = null;\nvar b = 12;\nvar res = a ?? b;\nprint(res);\n}</div>It will produce the following output –<div class="ar-text">يوضح المثال التالي كيف يمكنك استخدام التعبير الشرطي في Dart... سينتج المخرجات التالية –</div>`, type: "mcq", options: ["null", "12", "0", "None of the mentioned"], answer: 1, feedback: '<span class="q-source">المصدر: الصفحة 24</span>' },
            { text: `The following example shows how you can use conditional expression in Dart −<div class="q-code">void main() {\nvar a = 20;\nvar b = 12;\nvar res = a ?? b;\nprint(res);\n}</div>It will produce the following output –<div class="ar-text">يوضح المثال التالي كيف يمكنك استخدام التعبير الشرطي في Dart... سينتج المخرجات التالية –</div>`, type: "mcq", options: ["null", "12", "20", "None of the mentioned"], answer: 2, feedback: '<span class="q-source">المصدر: الصفحة 24</span>' },
            { text: `The following example illustrates the use of String data type in Dart correctly.<div class="ar-text">يوضح المثال التالي استخدام نوع بيانات السلسلة (String) في Dart بشكل صحيح.</div>`, type: "mcq", options: ["String str1 = 'this is a single line string';", 'String str2 = "this is a single line string";', "String str3 = '''this is a multiline line string''';", 'String str4 = """this is a multiline line string""";', "All of the mentioned"], answer: 4, feedback: '<span class="q-source">المصدر: الصفحة 38 و 39</span>' },
            { text: `Lists can be classified as –<div class="ar-text">يمكن تصنيف القوائم (Lists) إلى –</div>`, type: "mcq", options: ["Fixed Length List", "Growable List", "A and B", "None of the mentioned"], answer: 2, feedback: '<span class="q-source">المصدر: الصفحة 42</span>' },
            { text: `The syntax for defining a standard function is given below<div class="ar-text">بناء الجملة لتعريف دالة قياسية معطى أدناه</div>`, type: "mcq", options: ["function_name() { //statements }", "void function_name() { //statements }", "A Or B", "None of the mentioned"], answer: 2, feedback: '<span class="q-source">المصدر: الصفحة 50</span>' },
            { text: `the ways in which parameters can be used by functions.<div class="ar-text">الطرق التي يمكن بها استخدام المعاملات (parameters) بواسطة الدوال.</div>`, type: "mcq", options: ["Required Positional Parameters", "Optional Parameters", "A Or B", "None of the mentioned"], answer: 2, feedback: '<span class="q-source">المصدر: الصفحة 51</span>' },
            { text: `It is mandatory to pass values to required parameters during the function call.<div class=\"q-code\">Syntax:\nFunction_name(data_type param_1, data_type param_2[…]) {\n//statements\n}</div><div class="ar-text">من الإلزامي تمرير القيم إلى المعاملات المطلوبة أثناء استدعاء الدالة.</div>`, type: "mcq", options: ["Required Positional Parameters", "Optional Parameters", "A Or B", "None of the mentioned"], answer: 0, feedback: '<span class="q-source">المصدر: الصفحة 51</span>' },
            { text: `To specify optional positional parameters, use square [] brackets.<div class=\"q-code\">Syntax:\nvoid function_name(param1, [optional_param_1, optional_param_2]) { }\nIf an optional parameter is not passed a value, it is set to NULL.</div><div class="ar-text">لتحديد معاملات موضعية اختيارية، استخدم الأقواس المربعة [].</div>`, type: "mcq", options: ["Optional Positional Parameter", "Optional Named Parameter", "A and B", "None of the mentioned"], answer: 0, feedback: '<span class="q-source">المصدر: الصفحة 52</span>' },
            { text: `Dart is a ………………………………………….to build apps fast for many platforms like android, iOS, web, desktop, etc.<div class="ar-text">Dart هي ................................................. لبناء تطبيقات سريعة للعديد من المنصات مثل android و iOS والويب وسطح المكتب، إلخ.</div>`, type: "mcq", options: ["client-optimized", "object-oriented", "modern programming language", "All of the above"], answer: 3, feedback: '<span class="q-source">المصدر: الصفحة 2</span>' },
            { text: `Dart is a modern programming language to build apps fast for many platforms like …………….<div class="ar-text">Dart هي لغة برمجة حديثة لبناء تطبيقات سريعة للعديد من المنصات مثل ................</div>`, type: "mcq", options: ["android, iOS, web, desktop, etc.", "android and iOS only", "web and desktop only", "None of above"], answer: 0, feedback: '<span class="q-source">المصدر: الصفحة 2</span>' },
            { text: `………………………. offers modern programming features like null safety and asynchronous programming<div class="ar-text">............................ تقدم ميزات برمجة حديثة مثل السلامة من القيمة الفارغة (null safety) والبرمجة غير المتزامنة.</div>`, type: "mcq", options: ["Dart", "Flutter", "A and B", "None of above"], answer: 0, feedback: '<span class="q-source">المصدر: الصفحة 2</span>' },
            { text: `Google developed Dart in 2011 as an alternative to…………………………..<div class="ar-text">طورت Google لغة Dart في عام 2011 كبديل لـ ................................</div>`, type: "mcq", options: ["C#", "C++", "javascript", "None of above"], answer: 2, feedback: '<span class="q-source">المصدر: الصفحة 2</span>' },
            { text: `Dart is an object-oriented programming language and supports all oops features such as………………………………….<div class="ar-text">Dart هي لغة برمجة موجهة للكائنات وتدعم جميع ميزات oops مثل ........................................</div>`, type: "mcq", options: ["encapsulation and inheritance only.", "Polymorphism and interface only.", "encapsulation, inheritance, polymorphism, interface, etc", "None of above"], answer: 2, feedback: '<span class="q-source">المصدر: الصفحة 2</span>' },
            { text: `Dart …………………………….. provides the tools to compile and run dart program.<div class="ar-text">توفر Dart ............................... الأدوات لتجميع وتشغيل برنامج dart.</div>`, type: "mcq", options: ["SDK", "compiles", "A and B", "None of above"], answer: 0, feedback: '<span class="q-source">المصدر: الصفحة 5</span>' },
            { text: `You can run the dart program on your browser without installing any software. …………………………..is a web tool to write and run your dart code.<div class="ar-text">يمكنك تشغيل برنامج dart على متصفحك دون تثبيت أي برنامج. ................................ هي أداة ويب لكتابة وتشغيل كود dart الخاص بك.</div>`, type: "mcq", options: ["Android Studio", "Dartpad", "Visual Code", "None of above"], answer: 1, feedback: '<span class="q-source">المصدر: الصفحة 3</span>' },
            { text: `The Dart language supports the following types<div class="ar-text">تدعم لغة Dart الأنواع التالية</div>`, type: "mcq", options: ["Numbers and Strings", "Booleans", "Lists and Maps", "All of the mentioned"], answer: 3, feedback: '<span class="q-source">المصدر: الصفحة 14</span>' },
            { text: `…………………………. makes the code less strict and less clear due to type changes at runtime.<div class="ar-text">........................... يجعل الكود أقل صرامة وأقل وضوحًا بسبب تغييرات النوع في وقت التشغيل.</div>`, type: "mcq", options: ["dynamic", "var", "final", "All of the mentioned"], answer: 0, feedback: '<span class="q-source">المصدر: الصفحة 17</span>' },
            { text: `……………… automatically determines the type at initialization and cannot be changed afterward.<div class="ar-text">.................. يحدد النوع تلقائيًا عند التهيئة ولا يمكن تغييره بعد ذلك.</div>`, type: "mcq", options: ["final", "dynamic", "var", "const"], answer: 2, feedback: '<span class="q-source">المصدر: الصفحة 16</span>' },
            { text: `……………………..: can change TYPE of the variable, & can change VALUE of the variable later in code.<div class="ar-text">..........................: يمكن تغيير **نوع** المتغير، ويمكن تغيير **قيمة** المتغير لاحقًا في الكود.</div>`, type: "mcq", options: ["var", "dynamic", "final", "None of the mentioned"], answer: 1, feedback: '<span class="q-source">المصدر: الصفحة 17</span>' },
            { text: `……………………..: can't change TYPE of the variable, but can change VALUE of the variable later in code.<div class="ar-text">..........................: لا يمكن تغيير **نوع** المتغير، ولكن يمكن تغيير **قيمة** المتغير لاحقًا في الكود.</div>`, type: "mcq", options: ["const", "dynamic", "var", "final"], answer: 2, feedback: '<span class="q-source">المصدر: الصفحة 16</span>' },
            { text: `…………………………..: can't change TYPE of the variable, & can't change VALUE of the variable later in code.<div class="ar-text">............................: لا يمكن تغيير **نوع** المتغير، ولا يمكن تغيير **قيمة** المتغير لاحقًا في الكود.</div>`, type: "mcq", options: ["final", "var", "dynamic", "None of the mentioned"], answer: 0, feedback: '<span class="q-source">المصدر: الصفحة 17</span>' },
            { text: `The ………………………… keyword are used to declare constants. Dart prevents modifying the values of a variable declared using the ……………………. keyword.<div class="ar-text">تستخدم الكلمة المفتاحية .......................... للإعلان عن الثوابت. تمنع Dart تعديل قيم المتغير المعلن عنه باستخدام الكلمة المفتاحية .........................</div>`, type: "mcq", options: ["final", "const", "A and B", "None of the mentioned"], answer: 2, feedback: '<span class="q-source">المصدر: الصفحة 17</span>' },
            { text: `What will be the output of this program :<div class=\"q-code\">void main() { int num; print(num); }</div><div class="ar-text">ماذا سيكون ناتج هذا البرنامج: void main() { int num; print(num); }</div>`, type: "mcq", options: ["Error", "null", "num", "None of the mentioned"], answer: 1, feedback: '<span class="q-source">المصدر: الصفحة 16</span>' },
            { text: `What is Dart?<div class="ar-text">ما هي Dart؟</div>`, type: "mcq", options: ["Dart is a object-oriented programming language", "Dart is used to create a frontend user interfaces", "Both of the above", "None of the mentioned"], answer: 2, feedback: '<span class="q-source">المصدر: الصفحة 2</span>' },
            { text: `.Which framework uses dart?<div class="ar-text">أي إطار عمل يستخدم dart؟</div>`, type: "mcq", options: ["Python", "Java", "Flutter", "React"], answer: 2, feedback: '<span class="q-source">المصدر: الصفحة 2</span>' },
            { text: `Dart is an?<div class="ar-text">Dart هي؟</div>`, type: "mcq", options: ["Open-source", "Asynchronous", "Programming language", "All of the above"], answer: 3, feedback: '<span class="q-source">المصدر: الصفحة 2</span>' },
            { text: `.Dart is originally developed by?<div class="ar-text">تم تطوير Dart في الأصل بواسطة؟</div>`, type: "mcq", options: ["Microsoft", "Google", "IBM", "Facebook"], answer: 1, feedback: '<span class="q-source">المصدر: الصفحة 2</span>' },
            { text: `What is the extension of Dart file?<div class="ar-text">ما هو امتداد ملف Dart؟</div>`, type: "mcq", options: [".dart", ".py", ".java", ".drt"], answer: 0, feedback: '<span class="q-source">المصدر: الصفحة 9</span>' },
            { text: `Which of the following statements does not use string interpolation correctly?<div class="ar-text">أي من العبارات التالية لا يستخدم استيفاء السلسلة (string interpolation) بشكل صحيح؟</div>`, type: "mcq", options: ["print('Your name in upper case is $\"me\".toUpperCase');", "print(\"Your name in upper case is ${'me'.toUpperCase()}\");", "print('Your name in upper case is ${\"me\".toUpperCase()}');", "None of the mentioned"], answer: 0, feedback: '<span class="q-source">المصدر: الصفحة 39</span>' },
            { text: `Which keyword in Dart is used to create a subclass<div class="ar-text">ما الكلمة المفتاحية في Dart المستخدمة لإنشاء فئة فرعية (subclass)؟</div>`, type: "mcq", options: ["extends", "subclass", "super", "None of the mentioned"], answer: 0, feedback: '<span class="q-source">المصدر: الصفحة 58</span>' },
            { text: `Instance variables in Dart cannot be<div class="ar-text">متغيرات المثيل (Instance variables) في Dart لا يمكن أن تكون</div>`, type: "mcq", options: ["final", "const", "A and B", "None of these"], answer: 1, feedback: '<span class="q-source">المصدر: الصفحة 60</span>' },
            { text: `What is commonly known as a dictionary or hash<div class="ar-text">ما الذي يُعرف عمومًا باسم القاموس أو التجزئة (hash)؟</div>`, type: "mcq", options: ["set", "list", "map", "none of these"], answer: 2, feedback: '<span class="q-source">المصدر: الصفحة 46</span>' },
            { text: `The await keyboard works in<div class="ar-text">تعمل الكلمة المفتاحية await في</div>`, type: "mcq", options: ["async function only", "sync function only", "both async and sync function", "None of the mentioned"], answer: 0, feedback: '<span class="q-source">المصدر: محاضرة 8 صفحة 15</span>' },
            { text: `The ……………………………………keyword is contract between you and Dart. You are telling Dart that you will assign a value to the variable before you use it. If you don’t assign a value to the variable before you use it, Dart will throw an error.<div class="ar-text">الكلمة المفتاحية .............................................. هي عقد بينك وبين Dart. أنت تخبر Dart أنك ستقوم بتعيين قيمة للمتغير قبل استخدامه. إذا لم تقم بتعيين قيمة للمتغير قبل استخدامه، فستقوم Dart بإلقاء خطأ.</div>`, type: "mcq", options: ["late", "null", "?", "None of the mentioned"], answer: 2, feedback: '<span class="q-source">المصدر: الصفحة 43/44</span>' },
            { text: `Advantage of Null Safety<div class="ar-text">ميزة السلامة من القيمة الفارغة (Null Safety)</div>`, type: "mcq", options: ["Write safe code.", "Reduce the chances of application crashes.", "Easy to find and fix bugs in code.", "All of the mentioned"], answer: 3, feedback: '<span class="q-source">المصدر: الصفحة 44</span>' },
            { text: `You can use nullable variables in many ways. Some of them are shown below:?<div class="ar-text">يمكنك استخدام المتغيرات القابلة للقيمة الفارغة (nullable) بعدة طرق. بعضها موضح أدناه:؟</div>`, type: "mcq", options: ["if", "!", "??", "All of above"], answer: 3, feedback: '<span class="q-source">المصدر: الصفحة 44</span>' },
            { text: `Which of the following option is used to represent a collection of objects in Dart?<div class="ar-text">أي من الخيارات التالية يستخدم لتمثيل مجموعة من الكائنات في Dart؟</div>`, type: "mcq", options: ["class", "Map", "List", "B and C"], answer: 3, feedback: '<span class="q-source">المصدر: الصفحة 41 و 46</span>' },
            { text: `………..keyword is used to declare a non-nullable variable that is not initialized at the time of declaration.?<div class="ar-text">الكلمة المفتاحية ........... تستخدم للإعلان عن متغير غير قابل للفراغ (non-nullable) لم يتم تهيئته في وقت الإعلان.؟</div>`, type: "mcq", options: ["late", "?", "A and B", "None of the above"], answer: 0, feedback: '<span class="q-source">المصدر: الصفحة 45</span>' },
            { text: `To create a list in Dart language by specifying its initial elements, we write?<div class="ar-text">لإنشاء قائمة في لغة Dart عن طريق تحديد عناصرها الأولية، نكتب؟</div>`, type: "mcq", options: ["List<int> ages =;", "List<String> names = [\"Raj\", \"John\", \"Rocky\"];", "var mixed = [10, \"John\", 18.8];", "All of the above"], answer: 3, feedback: '<span class="q-source">المصدر: الصفحة 41-42</span>' },
            { text: `Which of the following is NOT a data type in Dart?<div class="ar-text">أي مما يلي **ليس** نوع بيانات في Dart؟</div>`, type: "mcq", options: ["String", "int", "bool", "char"], answer: 3, feedback: '<span class="q-source">المصدر: الصفحة 14</span>' },
            { text: `In …………………………….parameters, you must supply the arguments in the same order as you defined on parameters when you wrote the function. If you call the function with the parameter in the wrong order, you will get the wrong result.<div class="ar-text">في المعاملات ..................................، يجب عليك تزويد الوسائط (arguments) بنفس الترتيب الذي حددته في المعاملات عند كتابة الدالة. إذا استدعينا الدالة بالمعامل بترتيب خاطئ، فستحصل على نتيجة خاطئة.</div>`, type: "mcq", options: ["Named", "positional", "Optional", "None of the mentioned"], answer: 1, feedback: '<span class="q-source">المصدر: الصفحة 51</span>' },
            { text: `You can pass the value in any order in the ………………… parameter<div class="ar-text">يمكنك تمرير القيمة بأي ترتيب في المعامل .........................</div>`, type: "mcq", options: ["Named", "positional", "Optional", "None of the mentioned"], answer: 0, feedback: '<span class="q-source">المصدر: الصفحة 52</span>' },
            { text: `Dart allows you to use optional parameters to make the parameter optional in function calls. Square braces…………………. are used to specify optional parameters.<div class="ar-text">تسمح لك Dart باستخدام معاملات اختيارية لجعل المعامل اختياريًا في استدعاءات الدالة. تستخدم الأقواس المربعة ...................... لتحديد المعاملات الاختيارية.</div>`, type: "mcq", options: ["[]", "{}", "reqired", "None of the mentioned"], answer: 0, feedback: '<span class="q-source">المصدر: الصفحة 52</span>' },
            { text: `Dart has a special syntax for the function body, which is only one line. The …………………..function is represented by => symbol. It is a shorthand syntax for any function that has only one expression.<div class="ar-text">لدى Dart بناء جملة خاص لجسم الدالة، وهو سطر واحد فقط. يتم تمثيل الدالة ........................... بالرمز =>. إنه بناء جملة مختصر لأي دالة تحتوي على تعبير واحد فقط.</div>`, type: "mcq", options: ["arrow", "anonymous", "A and B", "None of the mentioned"], answer: 0, feedback: '<span class="q-source">المصدر: الصفحة 54</span>' },
            { text: `Which of the following is NOT a data type in Dart?<div class="ar-text">أي مما يلي **ليس** نوع بيانات في Dart؟</div>`, type: "mcq", options: ["var", "final", "char", "All of the mentioned"], answer: 3, feedback: 'var و final كلمات مفتاحية، و char غير موجود.<span class="q-source">المصدر: الصفحة 14 و 16</span>' },
            { text: `What is the output of the following Dart program?<div class="q-code">void main() {\n   var details = {\n      'Usrname':'tom',\n      'Password':'pass@123'};\n   print(details);\n}</div>Output:<div class="q-output-block">{Usrname: tom, Password: pass@123}</div>`, type: "code", answer: true, feedback: '<span class="q-source">المصدر: الصفحة 46 (Map Initializes)</span>' },
            { text: `Example: Adding Values to Map Literals at Runtime<div class="q-code">void main() {\n   var details = {\n      'Usrname':'tom',\n      'Password':'pass@123'\n   };\n   details['Uid'] = 'U1oo1';\n   print(details);\n}</div>Output:<div class="q-output-block">{Usrname: tom, Password: pass@123, Uid: U1oo1}</div>`, type: "code", answer: true, feedback: '<span class="q-source">المصدر: الصفحة 47 (Adding Value)</span>' },
            { text: `What is the output?<div class="q-code">void main() {\n   test_param(123);\n}\ntest_param(n1,[s1]) {\n   print(n1);\n   print(s1);\n}</div>Output:<div class="q-output-block">123\nnull</div>`, type: "code", answer: true, feedback: '<span class="q-source">المصدر: الصفحة 52 (Optional Positional Parameter)</span>' },
            { text: `What is the output?<div class="q-code">void main() {\n   test_param(123);\n   test_param(123,s1:'hello');\n   test_param(123,s2:'hello',s1:'world');\n}\ntest_param(n1,{s1,s2}) {\n   print(n1);\n   print(s1);\n}</div>Output:<div class="q-output-block">123\nnull\n123\nhello\n123\nworld</div>`, type: "code", answer: true, feedback: '<span class="q-source">المصدر: الصفحة 52 (Optional Named Parameter)</span>' },
            { text: `What is the output?<div class="q-code">void main() {\n   Child c = new Child();\n   c.m1(12);\n}\nclass Parent {\n   String msg = "message variable from the parent class";\n   void m1(int a){ print("value of a \${a}");}\n}\nclass Child extends Parent {\n   @override\n   void m1(int b) {\n      print("value of b \${b}");\n      super.m1(13);\n      print("\${super.msg}")   ;\n   }\n}</div>Output:<div class="q-output-block">value of b 12\nvalue of a 13\nmessage variable from the parent class</div>`, type: "code", answer: true, feedback: '<span class="q-source">المصدر: الصفحة 61 (Method Overriding)</span>' },
            { text: `The number and type of the function parameters must match while overriding the method. In case of a mismatch in the number of parameters or their data type, the Dart compiler throws an error.<div class="q-code">import 'dart:io';\nvoid main() {\n   Child c = new Child();\n   c.m1(12);\n}\nclass Parent {\n   void m1(int a){ print("value of a \${a}");}\n}\nclass Child extends Parent {\n   @override\n   void m1(String b) {\n      print("value of b \${b}");\n   }\n}</div>Output:<div class="q-output-block">Error</div>`, type: "code", answer: true, feedback: '<span class="q-source">المصدر: الصفحة 61 (Method Overriding - Error Case)</span>' }
        ]
    },
    { id: '3', title: "المحاضرة الثالثة", questions: [] },
    { id: '4', title: "المحاضرة الرابعة", questions: [] },
    { id: '5', title: "المحاضرة الخامسة", questions: [] },
    { id: '6', title: "المحاضرة السادسة", questions: [] },
    { id: '7', title: "المحاضرة السابعة", questions: [] },
    { id: '8', title: "المحاضرة الثامنة", questions: [] },
    { id: '9', title: "المحاضرة التاسعة", questions: [] },
    { id: '10', title: "المحاضرة العاشرة", questions: [] },
];

/* =============================================
   INIT GRID
============================================= */
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('lecture-grid');
    lectures.forEach(lec => {
        const card = document.createElement('div');
        card.className = 'lecture-card';
        card.onclick = () => openQuiz(lec.id);
        card.innerHTML = `
       <div class="card-icon">📚</div>
       <div class="card-title">${lec.title}</div>
       <div class="card-desc">${lec.questions.length ? lec.questions.length + ' سؤال' : 'قريباً...'}</div>
     `;
        grid.appendChild(card);
    });
});

/* =============================================
   SEARCH LOGIC
============================================= */
function handleSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.lecture-card');
    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

/* =============================================
   QUIZ LOGIC
============================================= */
let currentLec = null;
let currentQuestions = []; // Filtered questions
let currentIdx = 0;
let score = { correct: 0, wrong: 0 };
let userAnswers = {}; // key: index, val: answer

function openQuiz(id) {
    const lec = lectures.find(l => l.id === id);
    if (!lec) return;

    currentLec = lec;
    document.getElementById('modal-title').textContent = lec.title;
    document.getElementById('quiz-modal').style.display = 'block';

    if (!lec.questions || lec.questions.length === 0) {
        renderEmptyState();
        return;
    }

    renderSelectionScreen();
}

function backToSelection() {
    renderSelectionScreen();
}

function closeModal() {
    document.getElementById('quiz-modal').style.display = 'none';
    currentLec = null;
    currentQuestions = [];
}

function renderEmptyState() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '<div style="text-align:center; padding:20px; color:#aaa;">لا توجد أسئلة مضافة لهذه المحاضرة بعد.</div>';
    document.getElementById('btn-prev').style.display = 'none';
    document.getElementById('btn-next').style.display = 'none';

    // Reset stats
    document.getElementById('m-q-num').textContent = '0';
    document.getElementById('m-total').textContent = '0';
    document.getElementById('m-progress').style.width = '0%';
    document.getElementById('m-correct').textContent = '0';
    document.getElementById('m-wrong').textContent = '0';
}

function renderSelectionScreen() {
    const container = document.getElementById('quiz-container');
    document.getElementById('btn-prev').style.display = 'none';
    document.getElementById('btn-next').style.display = 'none';

    const backBtn = document.getElementById('btn-back-selection');
    if (backBtn) backBtn.style.display = 'none';

    const disclaimer = document.getElementById('quiz-disclaimer');
    if (disclaimer) disclaimer.style.display = 'none';

    // Reset stats
    document.getElementById('m-q-num').textContent = '-';
    document.getElementById('m-total').textContent = currentLec.questions.length; // Total available
    document.getElementById('m-progress').style.width = '0%';
    document.getElementById('m-correct').textContent = '0';
    document.getElementById('m-wrong').textContent = '0';

    container.innerHTML = `
    <div class="quiz-selection fade-in">
      <div class="selection-btn" onclick="startQuiz('tf')">
        <div class="selection-icon">✅/❌</div>
        <div class="selection-label">أسئلة الصح والخطأ</div>
      </div>
      <div class="selection-btn" onclick="startQuiz('mcq')">
        <div class="selection-icon">🔢</div>
        <div class="selection-label">أسئلة الاختيارات</div>
      </div>
      <div class="selection-btn" onclick="startQuiz('code')">
        <div class="selection-icon">💻</div>
        <div class="selection-label">أسئلة الكود</div>
      </div>
    </div>
    `;
}

function startQuiz(type) {
    // Filter questions
    currentQuestions = [];
    if (type === 'tf') {
        currentQuestions = currentLec.questions.filter(q => q.type === 'tf');
    } else if (type === 'code') {
        currentQuestions = currentLec.questions.filter(q => q.type === 'code');
    } else {
        currentQuestions = currentLec.questions.filter(q => q.type === 'mcq');
    }

    if (currentQuestions.length === 0) {
        const container = document.getElementById('quiz-container');
        let tText = 'صح/خطأ';
        if (type === 'mcq') tText = 'اختيارات';
        if (type === 'code') tText = 'أكواد';
        container.innerHTML = `<div style="text-align:center; padding:20px; color:#aaa;">لا توجد أسئلة من نوع ${tText} لهذه المحاضرة.</div>`;
        return;
    }

    currentIdx = 0;
    score = { correct: 0, wrong: 0 };
    userAnswers = {};

    const backBtn = document.getElementById('btn-back-selection');
    if (backBtn) backBtn.style.display = 'inline-block';

    const disclaimer = document.getElementById('quiz-disclaimer');
    if (disclaimer) disclaimer.style.display = 'block';

    renderQuestion();
}

function renderQuestion() {
    const container = document.getElementById('quiz-container');
    const qNum = document.getElementById('m-q-num');
    const total = document.getElementById('m-total');
    const prog = document.getElementById('m-progress');
    const correctEl = document.getElementById('m-correct');
    const wrongEl = document.getElementById('m-wrong');

    document.getElementById('btn-prev').style.display = 'block';
    document.getElementById('btn-next').style.display = 'block';

    const q = currentQuestions[currentIdx];
    const i = currentIdx;

    // Update stats
    qNum.textContent = i + 1;
    total.textContent = currentQuestions.length;
    prog.style.width = ((i + 1) / currentQuestions.length * 100) + '%';
    correctEl.textContent = score.correct;
    wrongEl.textContent = score.wrong;

    // Card HTML
    let html = `
    <div class="question-card active fade-in">
      <div class="q-header">
         <div class="q-num">${i + 1}</div>
         <div class="q-type-badge ${q.type === 'mcq' ? 'badge-mcq' : (q.type === 'code' ? 'badge-code' : 'badge-tf')}">${q.type === 'mcq' ? 'اختيار' : (q.type === 'code' ? 'كود' : 'صح/خطأ')}</div>
      </div>
      <div class="q-text">${q.text}</div>
  `;

    // Options
    const saved = userAnswers[i];

    if (q.type === 'mcq') {
        html += '<div class="options">';
        q.options.forEach((opt, j) => {
            let cls = 'option';
            if (saved !== undefined) {
                cls += ' disabled';
                if (j === q.answer) cls += ' correct'; // Always show true answer
                else if (j === saved) cls += ' wrong';
            }
            html += `
          <div class="${cls}" onclick="handleAns(${j})">
             <div class="option-letter">${['أ', 'ب', 'ج', 'د'][j]}</div>
             <div>${opt}</div>
          </div>
        `;
        });
        html += '</div>';
    } else {
        let tCls = 'tf-btn true-btn', fCls = 'tf-btn false-btn';
        if (saved !== undefined) {
            tCls += ' disabled'; fCls += ' disabled';
            if (q.answer === true) tCls += ' reveal-correct'; else fCls += ' reveal-correct';
            if (saved === true && saved !== q.answer) tCls += ' selected-wrong';
            if (saved === false && saved !== q.answer) fCls += ' selected-wrong';
        }
        html += `
       <div class="tf-wrap">
         <div class="${tCls}" onclick="handleAns(true)">✅ صحيح</div>
         <div class="${fCls}" onclick="handleAns(false)">❌ خطأ</div>
       </div>
     `;
    }

    // Feedback
    if (saved !== undefined) {
        const isCorr = (saved === q.answer);
        html += `<div class="feedback show ${isCorr ? 'correct-fb' : 'wrong-fb'}">${q.feedback || (isCorr ? 'إجابة صحيحة' : 'إجابة خاطئة')}</div>`;
    }

    html += '</div>';
    container.innerHTML = html;

    // Nav btns
    document.getElementById('btn-prev').disabled = (i === 0);
    document.getElementById('btn-next').textContent = (i === currentQuestions.length - 1) ? 'إنهاء' : 'التالي';
}

function handleAns(ans) {
    if (userAnswers[currentIdx] !== undefined) return;
    userAnswers[currentIdx] = ans;
    const q = currentQuestions[currentIdx];

    // For TF, answer might be true/false. For MCQ, 0-3.
    const isCorrect = (ans === q.answer);

    if (isCorrect) {
        score.correct++;
        showToast('إجابة صحيحة!', 'correct');
        playCorrectSound();
    } else {
        score.wrong++;
        showToast('إجابة خاطئة', 'wrong');
        playWrongSound();
    }
    renderQuestion();
}

function nextQ() {
    if (currentIdx < currentQuestions.length - 1) {
        currentIdx++;
        renderQuestion();
    } else {
        closeModal();
    }
}
function prevQ() {
    if (currentIdx > 0) {
        currentIdx--;
        renderQuestion();
    }
}

/* =============================================
   HELPERS (Sound, Toast, BG)
============================================= */
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function getAudioCtx() { if (!audioCtx) audioCtx = new AudioContext(); return audioCtx; }
function playCorrectSound() {
    try { const ctx = getAudioCtx(); const o = ctx.createOscillator(); const g = ctx.createGain(); o.connect(g); g.connect(ctx.destination); o.type = 'sine'; o.frequency.value = 600; g.gain.value = 0.1; o.start(); o.stop(ctx.currentTime + 0.1); } catch (e) { }
}
function playWrongSound() {
    try { const ctx = getAudioCtx(); const o = ctx.createOscillator(); const g = ctx.createGain(); o.connect(g); g.connect(ctx.destination); o.type = 'sawtooth'; o.frequency.value = 200; g.gain.value = 0.1; o.start(); o.stop(ctx.currentTime + 0.2); } catch (e) { }
}

let tTime;
function showToast(m, t) {
    const el = document.getElementById('toast');
    el.textContent = m; el.className = 'toast show ' + t;
    clearTimeout(tTime); tTime = setTimeout(() => el.classList.remove('show'), 2000);
}

// Starfield simple
(function () {
    const c = document.getElementById('stars-canvas');
    if (!c) return;
    const x = c.getContext('2d');
    let w, h, s;
    function i() {
        w = c.width = window.innerWidth;
        h = c.height = window.innerHeight;
        const count = w < 600 ? 30 : 100; // Reduce stars on mobile
        s = Array(count).fill().map(() => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.5 }));
    }
    function d() { x.clearRect(0, 0, w, h); s.forEach(p => { x.beginPath(); x.arc(p.x, p.y, p.r, 0, 7); x.fillStyle = '#fff'; x.fill(); }); requestAnimationFrame(d); }
    window.onresize = i; i(); d();
})();
