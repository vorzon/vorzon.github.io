import{_ as r,r as a,o as c,c as u,a as n,e,w as t,F as i,b as s}from"./app.3a8219bf.js";const b={},k=n("h3",{id:"\u9898\u76EE",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9898\u76EE","aria-hidden":"true"},"#"),s(" \u9898\u76EE")],-1),m={href:"https://leetcode.cn/problems/add-two-numbers/",target:"_blank",rel:"noopener noreferrer"},d=s("2. \u4E24\u6570\u76F8\u52A0"),_=n("h3",{id:"\u9898\u89E3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9898\u89E3","aria-hidden":"true"},"#"),s(" \u9898\u89E3")],-1),h=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},`/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */`),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"addTwoNumbers"),n("span",{class:"token punctuation"},"("),s("l1 "),n("span",{class:"token operator"},"*"),s("ListNode"),n("span",{class:"token punctuation"},","),s(" l2 "),n("span",{class:"token operator"},"*"),s("ListNode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"*"),s("ListNode "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" head"),n("span",{class:"token punctuation"},","),s(" tail "),n("span",{class:"token operator"},"*"),s(`ListNode
    temp `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),s(`

    `),n("span",{class:"token keyword"},"for"),s(" l1 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token operator"},"||"),s(" l2 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        v1`),n("span",{class:"token punctuation"},","),s(" v2 "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" l1 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
            v1 `),n("span",{class:"token operator"},"="),s(" l1"),n("span",{class:"token punctuation"},"."),s(`Val
            l1 `),n("span",{class:"token operator"},"="),s(" l1"),n("span",{class:"token punctuation"},"."),s(`Next
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"if"),s(" l2 "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
            v2 `),n("span",{class:"token operator"},"="),s(" l2"),n("span",{class:"token punctuation"},"."),s(`Val
            l2 `),n("span",{class:"token operator"},"="),s(" l2"),n("span",{class:"token punctuation"},"."),s(`Next
        `),n("span",{class:"token punctuation"},"}"),s(`

        sum `),n("span",{class:"token operator"},":="),s(" v1 "),n("span",{class:"token operator"},"+"),s(" v2 "),n("span",{class:"token operator"},"+"),s(` temp
        temp `),n("span",{class:"token operator"},"="),s(" sum "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"10"),s(`
        sum `),n("span",{class:"token operator"},"="),s(" sum "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"10"),s(`

        `),n("span",{class:"token keyword"},"if"),s(" head "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
            head `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("ListNode"),n("span",{class:"token punctuation"},"{"),s(`
                Val`),n("span",{class:"token punctuation"},":"),s(" sum"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            tail `),n("span",{class:"token operator"},"="),s(` head
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            tail`),n("span",{class:"token punctuation"},"."),s("Next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("ListNode"),n("span",{class:"token punctuation"},"{"),s(`
                Val`),n("span",{class:"token punctuation"},":"),s(" sum"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            tail `),n("span",{class:"token operator"},"="),s(" tail"),n("span",{class:"token punctuation"},"."),s(`Next
        `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"if"),s(" temp "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"{"),s(`
        tail`),n("span",{class:"token punctuation"},"."),s("Next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s("ListNode"),n("span",{class:"token punctuation"},"{"),s("Val"),n("span",{class:"token punctuation"},":"),s(" temp"),n("span",{class:"token punctuation"},","),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(` head
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br")])],-1);function f(N,x){const o=a("ExternalLinkIcon"),l=a("CodeGroupItem"),p=a("CodeGroup");return c(),u(i,null,[k,n("p",null,[n("a",m,[d,e(o)])]),_,e(p,null,{default:t(()=>[e(l,{title:"Go"},{default:t(()=>[h]),_:1})]),_:1})],64)}var v=r(b,[["render",f],["__file","add_two_numbers.html.vue"]]);export{v as default};
