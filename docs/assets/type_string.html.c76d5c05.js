import{_ as s,d as n}from"./app.db30b674.js";const a={},e=n(`<h3 id="\u7B80\u5355\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u4ECB\u7ECD" aria-hidden="true">#</a> \u7B80\u5355\u4ECB\u7ECD</h3><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><h3 id="\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> \u5B9E\u73B0\u539F\u7406</h3><h4 id="sds-simple-dynamic-string" tabindex="-1"><a class="header-anchor" href="#sds-simple-dynamic-string" aria-hidden="true">#</a> sds(simple dynamic string)</h4><p>redis \u5B9A\u4E49\u7684\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u9488\u5BF9\u4E0D\u540C\u957F\u5EA6\u7684\u5B57\u7B26\u4E32\uFF0C\u4F7F\u7528\u4E0D\u540C\u7684 sds \u7ED3\u6784\u4F53</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>type <span class="token keyword">char</span> <span class="token operator">*</span>sds

<span class="token keyword">struct</span> <span class="token keyword">__attribute__</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>__packed__<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token class-name">sdshdr5</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">char</span> flags<span class="token punctuation">;</span>    <span class="token comment">// \u4F4E\u4E09\u4F4D\u8868\u793Asdshdr\u7684\u7C7B\u578B\uFF0C\u9AD85\u4F4D\u8868\u793A\u5B57\u7B26\u4E32\u957F\u5EA6</span>
    <span class="token keyword">char</span> buf<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token keyword">__attribute__</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>__packed__<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token class-name">sdshdr8</span> <span class="token punctuation">{</span>
    <span class="token class-name">uint8_t</span> len<span class="token punctuation">;</span>        <span class="token comment">// \u5B57\u8282\u957F\u5EA6\uFF0C\u5373\u5B57\u7B26\u4E32\u957F\u5EA6\uFF0C2^8</span>
    <span class="token class-name">uint8_t</span> alloc<span class="token punctuation">;</span>      <span class="token comment">// \u5DF2\u7533\u8BF7\u5B57\u8282\u957F\u5EA6\uFF0C\u5373sds\u603B\u957F\u5EA6</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">char</span> flags<span class="token punctuation">;</span>    <span class="token comment">// \u4F4E\u4E09\u4F4D\u8868\u793Asdshdr\u7684\u7C7B\u578B\uFF0C\u9AD85\u4F4D\u53EA\u5728sdshdr5\u4F7F\u7528\uFF0C\u8868\u793A\u5B57\u7B26\u4E32\u957F\u5EA6</span>
    <span class="token keyword">char</span> buf<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>             <span class="token comment">//\u5B57\u7B26\u4E32\u5185\u5BB9\uFF0C\u4FDD\u5B58\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4F5C\u4E3Abuf\u7684\u7ED3\u5C3E\uFF0C\u6CA1\u6307\u5B9A\u957F\u5EA6\uFF0C\u662F\u67D4\u6027\u6570\u7EC4</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

sdshdr16\u3001sdshdr32\u3001sdshdr64\u548Csdshdr8\u7C7B\u4F3C\uFF0C\u53EA\u662F\u7C7B\u578B\u6362\u6210<span class="token class-name">uint16_t</span>\u3001<span class="token class-name">uint32_t</span>\u3001<span class="token class-name">uint64_t</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Tips-1:</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">__attribute__</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>__packed__<span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// \u8868\u793A\u53EF\u4EE5\u53D6\u6D88\u7ED3\u6784\u4F53\u5185\u7684\u5B57\u8282\u5BF9\u9F50\u4EE5\u8282\u7701\u5185\u5B58</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Tips-2:</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>\u67D4\u6027\u6570\u7EC4\uFF1A
\u7ED3\u6784\u4F53\u6700\u540E\u4E00\u4E2A\u5C5E\u6027\u53EF\u5B9A\u4E49\u4E3A\u4E00\u4E2A\u53EF\u53D8\u7684\u6570\u7EC4\uFF0C\u8BE5\u5C5E\u6027\u524D\u5FC5\u987B\u6709\u5176\u4ED6\u5C5E\u6027\u3002
\u4F7F\u7528<span class="token keyword">sizeof</span>\u8BA1\u7B97\u542B\u67D4\u6027\u6570\u636E\u7684\u7ED3\u6784\u4F53\u5927\u5C0F\uFF0C\u8FD4\u56DE\u7ED3\u679C\u4E0D\u5305\u542B\u67D4\u6027\u6570\u7EC4\u5360\u7528\u7684\u5185\u5B58
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,10);function p(t,c){return e}var o=s(a,[["render",p],["__file","type_string.html.vue"]]);export{o as default};
