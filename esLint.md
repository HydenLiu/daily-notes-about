## ESLint代码规范

### 开箱即用

```js
module.exports = {
  root: true,
  parserOptions: {
    plugins: ['vue', '@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/base', 'plugin:@typescript-eslint/recommended','plugin:vue/recommended', 'eslint:recommended'],

  rules: {
    "vue/max-attributes-per-line": [2, {
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline":"off",
    "vue/name-property-casing": ["error", "PascalCase"],
    "vue/no-v-html": "off",
    'accessor-pairs': 2,
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    'camelcase': [0, {
      'properties': 'always'
    }],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    'curly': [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    'eqeqeq': ["error", "always", {"null": "ignore"}],
    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }],
    'handle-callback-err': [2, '^(err|error)$'],
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2,
    'no-var': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 0,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [2, {
      'initialized': 'never'
    }],
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': [2, 'never'],
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    'yoda': [2, 'never'],
    'prefer-const': 2,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never']
  }
}
```



### 对应的解释

```
//语法解释
module.exports = {
	
	root: true,//此项是用来告诉eslint找当前配置文件不能往父级查找
	
	//此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
	
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module'
	},
	
	//此项指定环境的全局变量，下面的配置指定为浏览器环境
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	
	extends: ['plugin:vue/recommended', 'eslint:recommended'],
	//在这里添加您的自定义规则
	
	//it is base on https://github.com/vuejs/eslint-config-vue
	// 下面这些rules是用来设置从插件来的规范代码的规则，使用必须去掉前缀eslint-plugin-
	// 主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
	// "off" -> 0 关闭规则
	// "warn" -> 1 开启警告规则
	//"error" -> 2 开启错误规则
	rules: {
		'vue/max-attributes-per-line': [2, {
			'singleline': 10,
			'multiline': {
				'max': 1,
				'allowFirstLine': false
			}
		}],
		'vue/html-indent': ['error', 2, { // 类型 number ：缩进的空格数  tab : tab缩进
			'attribute': 1,
			'baseIndent': 1,
			'closeBracket': 0,
			'alignAttributesVertically': true,
			'ignores': []
		}],
		'vue/singleline-html-element-content-newline': 'off',// 在单行元素的内容前后需要换行符
		'vue/multiline-html-element-content-newline': 'off',// 在多行元素的内容之前和之后需要换行符
		'vue/name-property-casing': ['error', 'PascalCase'],// JS/JSX中的组件名应该始终是帕斯卡命名法
		'vue/no-v-html': 'off',
		'vue/html-self-closing': ['error', {
			'html': {
				'void': 'never',
				'normal': 'any',
				'component': 'always'
			},
			'svg': 'always',
			'math': 'always'
		}],
		'accessor-pairs': 2,// 在对象中强制使用getter/setter
		'arrow-spacing': [2, { //要求箭头函数的箭头之前或之后有空格
			'before': true,
			'after': true
		}],
		'block-spacing': [2, 'always'],//在打开的块令牌内和同一行上的下一个令牌内强制执行一致的间距。此规则还会在同一行中的关闭块标记和以前的标记内强制实施一致的间距
		'brace-style': [2, '1tbs', {
			'allowSingleLine': true//允许一个块打开和关闭括号在同一行上
		}],//块级大括号风格
		'camelcase': [0, {// 需要驼峰命名
			'properties': 'always'
		}],
		'comma-dangle': [2, 'never'],// 要求或禁止使用尾随逗号；最后一个属性是不需要逗号
		'comma-spacing': [2, {// 强制逗号旁边的间距： 左右一个空格
			'before': false,
			'after': true
		}],
		'comma-style': [2, 'last'],// 逗号风格
		'constructor-super': 2,// 构建方法中使用super方法
		'curly': [2, 'multi-line'],//必须使用 if(){} 中的{}
		'dot-location': [2, 'property'],// 在dot之前和之后强制换行
		'eol-last': 2,// 在文件末尾要求或禁止换行
		'eqeqeq': ['error', 'always', { 'null': 'ignore' }],// 是否使用全等
		'generator-star-spacing': [2, {// 在生成器函数中强制执行*周围的间距
			'before': true,
			'after': true
		}],
		'handle-callback-err': [0, '^(err|error)$'],// 强制执行回调错误处理
		'indent': [2, 2, {// 强制执行一致的缩进
			'SwitchCase': 1
		}],
		'jsx-quotes': [2, 'prefer-single'],// 强制在JSX文件中一致使用单引号
		'key-spacing': [2, { //对象字面量中冒号的前后空格
			'beforeColon': false,
			'afterColon': true
		}],
		'keyword-spacing': [2, { //关键字前后强制执行一致的间距
			'before': true,
			'after': true
		}],
		'new-cap': [2, {//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
			'newIsCap': true,
			'capIsNew': false
		}],
		"no-var": 2, // 要求使用 let 或 const 而不是 var
		'new-parens': 2,//new时必须加小括号
		'no-array-constructor': 2,//禁止使用数组构造器
		'no-caller': 2,//禁止使用arguments.caller或arguments.callee
		'no-console': 'off',//禁止使用console
		'no-class-assign': 2,//禁止给类赋值
		'no-cond-assign': 2,//禁止在条件表达式中使用赋值语句
		'no-const-assign': 2,//禁止修改const声明的变量
		'no-control-regex': 0,//禁止在正则表达式中使用控制字符
		'no-delete-var': 2,//不能对var声明的变量使用delete操作符
		'no-dupe-args': 2,//函数参数不能重复
		'no-dupe-class-members': 2,
		'no-dupe-keys': 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
		'no-duplicate-case': 2,//switch中的case标签不能重复
		'no-empty-character-class': 2,//正则表达式中的[]内容不能为空
		'no-empty-pattern': 2,// 禁止使用空解构模式no-empty-pattern
		'no-eval': 2,//禁止使用eval
		'no-ex-assign': 2,//禁止给catch语句中的异常参数赋值
		'no-extend-native': 2,//禁止扩展native对象
		'no-extra-bind': 2,//禁止不必要的函数绑定
		'no-extra-boolean-cast': 2,//禁止不必要的bool转换
		'no-extra-parens': [2, 'functions'],//禁止非必要的括号
		'no-fallthrough': 2,// 禁止 case 语句落空
		'no-floating-decimal': 2,// 禁止数字字面量中使用前导和末尾小数点
		'no-func-assign': 2,//不允许重新分配function声明
		'no-implied-eval': 2,// 禁止使用类似 eval() 的方法
		'no-inner-declarations': [2, 'functions'],//在嵌套块中禁止function声明
		'no-invalid-regexp': 2,//不允许RegExp构造函数中的无效正则表达式字符串
		'no-irregular-whitespace': 2,//捕获无效的空格
		'no-iterator': 2,//防止使用该__iterator__属性时可能出现的错误
		'no-label-var': 2,//禁止创建与范围内的变量共享名称的标签的不良做法来创建更清晰的代码
		'no-labels': [2, {
			'allowLoop': false,//忽略粘贴到循环语句的标签
			'allowSwitch': false//忽略粘贴到开关语句的标签
		}],//禁止使用带标签的语句
		'no-lone-blocks': 2,//消除脚本顶层或其他块中不必要的和可能混淆的块
		'no-mixed-spaces-and-tabs': 2,//此规则不允许使用混合空格和制表符进行缩进
		'no-multi-spaces': 2,//禁止在逻辑表达式，条件表达式，声明，数组元素，对象属性，序列和函数参数周围使用多个空格
		'no-multi-str': 2,//规则旨在防止使用多行字符串
		'no-multiple-empty-lines': [2, {
			'max': 2
		}],// 强制连续空行的最大数量。
		'no-native-reassign': 2,//规则不允许修改只读全局变量 window,undefined...
		'no-negated-in-lhs': 2,//不允许否定in表达式中的左操作数
		'no-new-object': 2,//禁止new Object()
		'no-new-require': 2,//消除new require表达的使用
		'no-new-symbol': 2,//防止Symbol与new操作员的意外呼叫
		'no-new-wrappers': 2,//杜绝使用String，Number以及Boolean与new操作
		'no-obj-calls': 2,//不允许调用Math，JSON和Reflect对象作为功能,不允许把全局对象属性当做函数来调用
		'no-octal': 2,// 不允许使用八进制文字
		'no-octal-escape': 2,// 不允许字符串文字中的八进制转义序列
		'no-path-concat': 2,//node中不能使用__dirname或__filename做路径拼接
		'no-proto': 2,// 禁止使用__proto__属性
		'no-redeclare': 2,//禁止重复声明变量
		'no-regex-spaces': 2,//禁止在正则表达式字面量中使用多个空格 /foo bar/
		'no-return-assign': [2, 'except-parens'],//return 语句中不能有赋值表达式
		'no-self-assign': 2,//自我分配无效(不能赋值给自身)
		'no-self-compare': 2,//不能比较自身
		'no-sequences': 2,//禁止使用逗号运算符
		'no-shadow-restricted-names': 2,//严格模式中规定的限制标识符不能作为声明时的变量名使用(NaN，Infinity，undefined,eval和arguments等), js关键字和保留字不能作为函数名或者变量名
		'no-spaced-func': 2,//函数调用时 函数名与()之间不能有空格
		'no-sparse-arrays': 2,//禁止稀疏数组， [1,,2]
		'no-this-before-super': 2,//在调用super()之前不能使用this或super
		'no-throw-literal': 2,//禁止抛出字面量错误 throw "error";
		'no-trailing-spaces': 2,//一行结束后面不要有空格
		'no-undef': 2,//不能有未定义的变量
		'no-undef-init': 2,//变量初始化时不能直接给它赋值为undefined
		'no-unexpected-multiline': 2,//避免多行表达式
		'no-unmodified-loop-condition': 2,
		'no-unneeded-ternary': [2, {//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
			'defaultAssignment': false
		}],
		'no-unreachable': 2,//不能有无法执行的代码
		'no-unsafe-finally': 2, //不允许return，throw，break，和continue里面的语句finally块
		'no-unused-vars': [2, {//不能有声明后未被使用的变量或参数
			'vars': 'all',
			'args': 'none'
		}],
		'no-useless-call': 2,//禁止不必要的call和apply
		'no-useless-computed-key': 2, //禁止在对象中使用不必要的计算属性
		'no-useless-constructor': 2, // 禁用不必要的构造函数
		'no-useless-escape': 0, //禁用不必要的转义
		'no-whitespace-before-property': 2,  // 禁止属性前有空白
		'no-with': 2,//禁用with
		'one-var': [0, {//连续声明
			'initialized': 'never'
		}],
		'operator-linebreak': [2, 'before', {//换行时运算符在行尾还是行首
			'overrides': {
				'?': 'before',
				':': 'before'
			}
		}],
		'padded-blocks': [2, 'never'],//块语句内行首行尾是否要空行
		'quotes': [2, 'single', {//引号类型 `` "" ''
			'avoidEscape': true,
			'allowTemplateLiterals': true
		}],
		'semi': [2, 'never'],//语句强制分号结尾
		'semi-spacing': [2, {//分号前后空格
			'before': false,
			'after': true
		}],
		'space-before-blocks': [2, 'always'],//不以新行开始的块{前面要不要有空格
		'space-before-function-paren': [2, 'never'],//函数定义时括号前面要不要有空格
		'space-in-parens': [2, 'never'],//小括号里面要不要有空格
		'space-infix-ops': 2,//中缀操作符周围要不要有空格(需要)
		'space-unary-ops': [2, {//一元运算符的前/后要不要加空格
			'words': true,
			'nonwords': false
		}],
		'spaced-comment': [2, 'always', {//注释风格要不要有空格什么的
			'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
		}],
		'template-curly-spacing': [2, 'never'], //不允许大括号内的空格存在
		'use-isnan': 2,//禁止比较时使用NaN，只能用isNaN()
		'valid-typeof': 2,//必须使用合法的typeof的值
		'wrap-iife': [2, 'any'],//立即执行函数表达式的小括号风格
		'yield-star-spacing': [2, 'both'],
		'yoda': [2, 'never'],//禁止尤达条件,不允许在if条件中使用yoda条件
		'prefer-const': 2,//首选const
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,//禁止使用debugger语句
		'object-curly-spacing': [2, 'always', {//大括号内是否允许不必要的空格
			objectsInObjects: false
		}],
		'array-bracket-spacing': [2, 'never']//是否允许非空数组里面有多余的空格
	}
}

```

