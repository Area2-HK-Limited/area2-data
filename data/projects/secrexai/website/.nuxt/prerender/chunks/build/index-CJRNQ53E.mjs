import { u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, computed, withCtx, createTextVNode, unref, useSSRContext } from 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/h3/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/ufo/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/destr/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/hookable/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/unstorage/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/ohash/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/klona/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/defu/dist/defu.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/scule/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/unctx/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/pathe/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/@iconify/utils/lib/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/consola/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/vue-router/vue-router.node.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/tailwindcss/dist/colors.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/@iconify/vue/dist/iconify.mjs';
import '../_/renderer.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/unhead/dist/server.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/devalue/index.js';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/unhead/dist/utils.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/unhead/dist/plugins.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "PersonAI \u2014 \u4F4F\u55BA\u4F60 WhatsApp \u7684 24 \u5C0F\u6642\u5168\u80FD AI \u52A9\u624B | \u9999\u6E2F SME \u9996\u9078",
      meta: [
        { name: "description", content: "PersonAI \u4FC2\u9999\u6E2F SME \u5C08\u5C6C WhatsApp AI \u52A9\u624B\u3002\u5EE3\u6771\u8A71\u539F\u751F\u3001\u6C38\u4E45\u8A18\u61B6\u300160+ \u6280\u80FD\u3001\u6578\u64DA\u5B58\u4E9E\u592A\u5340\uFF08\u65E5\u672C\uFF09\u3001\u5514\u8A13\u7DF4\u6A21\u578B\u3001PDPO \u5408\u898F\u3002" },
        { property: "og:title", content: "PersonAI \u2014 \u4F4F\u55BA\u4F60 WhatsApp \u7684 24 \u5C0F\u6642\u5168\u80FD AI \u52A9\u624B" },
        { property: "og:description", content: "\u9999\u6E2F SME \u5C08\u5C6C WhatsApp AI \u52A9\u624B\u3002\u5EE3\u6771\u8A71\u539F\u751F \xB7 \u6C38\u4E45\u8A18\u61B6 \xB7 60+ \u6280\u80FD \xB7 PDPO \u5408\u898F" }
      ]
    });
    const activeIndustry = ref("restaurant");
    const activeRole = ref("boss");
    const activeScene = ref("meeting");
    const openFaq = ref(null);
    const visibleMessages = ref([]);
    const isTyping = ref(false);
    const industries = [
      { id: "restaurant", emoji: "\u{1F35C}", name: "\u9910\u98F2", pains: ["\u8A02\u4F4D\u3001\u9910\u724C\u66F4\u65B0\u3001\u5916\u8CE3\u8A02\u55AE\u4E09\u982D\u71D2", "\u6BCF\u65E5\u624B\u5BEB\u4ECA\u65E5\u7279\u5225\u9910\u55AE\u597D\u9EBB\u7169", "IG \u5BA3\u50B3\u60F3\u505A\u4F46\u5187\u6642\u9593"], solutions: ["\u8A9E\u97F3/\u6587\u5B57\u5373\u66F4\u65B0\u6BCF\u65E5\u9910\u55AE", "\u81EA\u52D5\u51FA IG Story \u5716", "\u5206\u6790\u9867\u5BA2\u5E38\u554F\u554F\u984C\uFF0C\u512A\u5316\u51FA\u54C1"] },
      { id: "retail", emoji: "\u{1F6CD}", name: "\u96F6\u552E", pains: ["WhatsApp \u5BA2\u4EBA\u67E5\u8A62\u7B54\u5514\u5B8C", "\u5EAB\u5B58\u67E5\u8A62\u8981\u627E\u4EBA", "\u4FC3\u92B7\u6587\u6848\u5514\u5920\u5438\u5F15"], solutions: ["AI \u6574\u7406\u5BA2\u4EBA\u67E5\u8A62\u512A\u5148\u7D1A + \u8349\u64EC\u56DE\u8986", "\u8FFD\u8E64\u5EAB\u5B58\u95DC\u9375\u5B57\u63D0\u9192", "\u751F\u6210\u591A\u7248\u672C\u4FC3\u92B7\u6587\u6848"] },
      { id: "property", emoji: "\u{1F3E0}", name: "\u5730\u7522", pains: ["\u653E\u76E4\u6587\u6848\u8981\u4E2D\u82F1\u5C0D\u7167", "\u7747\u6A13\u63D0\u9192\u8981\u9010\u500B WhatsApp", "\u5BA2\u6E90\u8DDF\u9032\u8A18\u5514\u4F4F"], solutions: ["\u8F38\u5165\u6A13\u76E4\u8CC7\u6599\u5373\u51FA\u4E2D\u82F1\u653E\u76E4\u6587\u6848", "\u81EA\u52D5\u7747\u6A13\u63D0\u9192", "\u8A18\u61B6\u5BA2\u4EBA\u504F\u597D\uFF0C\u4E0B\u6B21\u914D\u5C0D\u66F4\u6E96"] },
      { id: "accounting", emoji: "\u{1F4CA}", name: "\u6703\u8A08", pains: ["Chase \u5BA2\u4EBA\u4EA4\u55AE\u64DA\u597D\u8CBB\u6642", "\u6BCF\u6708\u8981\u51FA\u4E00\u5806\u5831\u8868", "\u82F1\u6587 email \u5514\u5920\u5C08\u696D"], solutions: ["\u6279\u91CF\u500B\u4EBA\u5316 WhatsApp \u63D0\u9192\u6B20\u4EA4\u5BA2\u4EBA", "\u81EA\u52D5\u6574\u7406\u6578\u64DA\u51FA\u5831\u8868", "\u5E6B\u4F60\u8349\u64EC\u5C08\u696D\u82F1\u6587 email"] },
      { id: "education", emoji: "\u{1F393}", name: "\u6559\u80B2", pains: ["\u529F\u8AB2\u6279\u6539\u5EFA\u8B70\u8981\u9010\u500B\u5BEB", "\u5BB6\u9577 WhatsApp \u67E5\u8A62\u56DE\u8986\u6162", "\u6559\u6750\u7FFB\u8B6F\u8017\u6642"], solutions: ["AI \u751F\u6210\u500B\u4EBA\u5316\u5B78\u751F\u53CD\u994B\u7BC4\u672C", "\u5FEB\u901F\u5206\u985E\u5BB6\u9577\u67E5\u8A62", "\u6587\u4EF6\u5373\u6642\u7FFB\u8B6F"] },
      { id: "beauty", emoji: "\u{1F485}", name: "\u7F8E\u5BB9", pains: ["\u9810\u7D04\u7BA1\u7406\u6DF7\u4E82", "IG \u6587\u6848\u60F3\u8981\u672C\u5730\u5316\u4F46\u51FA\u5514\u5230\u5473", "\u7522\u54C1\u4ECB\u7D39\u8981\u4E00\u518D\u91CD\u8907\u89E3\u91CB"], solutions: ["\u81EA\u52D5\u6574\u7406\u9810\u7D04\u65E5\u7A0B + \u63D0\u9192\u5BA2\u4EBA", "\u751F\u6210\u7CB5\u8A9E\u98A8\u683C\u7A2E\u8349\u6587\u6848", "\u5EFA\u7ACB\u5E38\u898B\u554F\u984C\u81EA\u52D5\u56DE\u8986\u7BC4\u672C"] },
      { id: "logistics", emoji: "\u{1F4E6}", name: "\u7269\u6D41", pains: ["\u6D3E\u9001\u66F4\u65B0\u8981\u9010\u500B WhatsApp", "\u8CA8\u7269\u72C0\u614B\u67E5\u8A62\u58D3\u57AE\u5BA2\u670D", "\u53F8\u6A5F\u8ABF\u5EA6\u8A18\u5514\u4F4F"], solutions: ["\u6279\u91CF\u767C\u9001\u6D3E\u9001\u72C0\u614B\u66F4\u65B0", "\u5EFA\u7ACB\u5FEB\u901F\u67E5\u8A62\u56DE\u8986\u7CFB\u7D71", "\u81EA\u52D5\u6574\u7406\u6BCF\u65E5\u4EFB\u52D9\u6E05\u55AE"] },
      { id: "medical", emoji: "\u{1F3E5}", name: "\u91AB\u7642", pains: ["\u9810\u7D04\u96FB\u8A71\u63A5\u5514\u5B8C\uFF0Cdouble booking", "\u75C5\u6B77\u8CC7\u6599\u5206\u6563\u96E3\u6574\u7406", "\u8986\u8A3A\u63D0\u9192\u8981\u4EBA\u624B\u6253"], solutions: ["AI \u6574\u7406\u9810\u7D04\u8A18\u9304 + \u6392\u7A0B\u63D0\u9192\u75C5\u4EBA\u8986\u8A3A", "\u6458\u8981\u75C5\u4EBA\u8A0A\u606F + \u904E\u5F80\u4F86\u5F80\u8A18\u9304", "\u6279\u91CF\u767C\u9001\u500B\u4EBA\u5316\u8986\u8A3A WhatsApp \u63D0\u9192"] },
      { id: "fitness", emoji: "\u{1F3CB}\uFE0F", name: "\u5065\u8EAB", pains: ["\u8AB2\u5802\u6392\u8868\u8981\u624B\u52D5\u66F4\u65B0", "\u6703\u54E1\u8DDF\u9032\u8A18\u5514\u4F4F\u8AB0\u5FEB\u5230\u671F", "\u793E\u5A92\u63A8\u5EE3\u505A\u5514\u5920"], solutions: ["AI \u6574\u7406\u8AB2\u5802\u6642\u9593\u8868 + \u63D0\u9192\u7F3A\u8AB2\u6703\u54E1", "\u8A18\u61B6\u6BCF\u500B\u6703\u54E1\u5230\u671F\u65E5 + \u81EA\u52D5\u6392\u7A0B\u63D0\u9192\u7E8C\u8CBB", "\u751F\u6210\u5065\u8EAB IG/Facebook \u63A8\u5EE3\u6587\u6848"] },
      { id: "renovation", emoji: "\u{1F3D7}\uFE0F", name: "\u88DD\u4FEE", pains: ["\u5831\u50F9\u55AE\u6BCF\u6B21\u90FD\u8981\u7531\u982D\u6574", "\u9805\u76EE\u591A\u500B\u540C\u6642\u9032\u884C\u9032\u5EA6\u96E3\u8FFD\u8E64", "\u5BA2\u6236\u8DDF\u9032\u9760\u8A18\u6027\u5BB9\u6613\u6F0F"], solutions: ["AI \u6839\u64DA\u5DE5\u7A0B\u985E\u578B\u5FEB\u901F\u751F\u6210\u5831\u50F9\u55AE\u8349\u7A3F", "\u6574\u7406\u591A\u500B\u9805\u76EE\u9032\u5EA6\u6210\u4E00\u89BD\u8868", "\u6392\u7A0B\u5BA2\u6236\u8DDF\u9032\u63D0\u9192"] },
      { id: "design", emoji: "\u{1F3A8}", name: "\u8A2D\u8A08", pains: ["\u5BA2\u6236 brief \u96F6\u6563 WhatsApp/email \u5230\u8655\u90FD\u662F", "\u5831\u50F9\u8FFD\u8E64\u9760\u8A18\u6027\u5BB9\u6613\u5FD8\u8A18\u8DDF\u9032", "\u767C\u7968\u63D0\u9192\u8981\u4EBA\u624B\u9001"], solutions: ["AI \u6574\u7406\u5BA2\u6236 brief + \u63D0\u53D6\u95DC\u9375\u8981\u6C42\u6210\u6458\u8981", "\u8A18\u9304\u6BCF\u500B\u9805\u76EE\u5831\u50F9\u72C0\u614B + \u6392\u7A0B\u8DDF\u9032\u63D0\u9192", "\u81EA\u52D5\u751F\u6210\u500B\u4EBA\u5316\u50AC\u6536 WhatsApp \u8A0A\u606F"] },
      { id: "ecommerce", emoji: "\u{1F4F1}", name: "\u96FB\u5546", pains: ["\u7522\u54C1\u63CF\u8FF0\u8981\u4E00\u500B\u500B\u5BEB", "\u5BA2\u670D\u67E5\u8A62\u91CF\u5927\u56DE\u8986\u5514\u53CA\u6642", "\u5EAB\u5B58\u4F4E\u4F4D\u5514\u77E5\u88DC\u8CA8\u6162"], solutions: ["AI \u6279\u91CF\u751F\u6210\u4E2D\u82F1\u6587\u7522\u54C1\u63CF\u8FF0", "\u6574\u7406\u5E38\u898B\u5BA2\u670D\u554F\u984C + \u751F\u6210\u6A19\u6E96\u56DE\u8986\u7BC4\u672C", "\u8A18\u9304\u5EAB\u5B58\u95DC\u9375\u5B57 + \u4F4E\u4F4D\u6642\u6392\u7A0B\u63D0\u9192\u88DC\u8CA8"] },
      { id: "bakery", emoji: "\u{1F370}", name: "\u70D8\u7119", pains: ["WhatsApp \u8A02\u55AE\u6574\u7406\u8981\u82B1\u5927\u91CF\u6642\u9593", "IG \u5BA3\u50B3\u6587\u6848\u5514\u77E5\u9EDE\u5BEB", "\u5BA2\u6236\u8A02\u55AE\u6536\u5497\u4F46\u5514\u8A18\u5F97\u8DDF\u9032\u78BA\u8A8D"], solutions: ["AI \u6574\u7406 WhatsApp \u8A02\u55AE\u8CC7\u6599\u6210\u6E05\u55AE\u683C\u5F0F", "\u751F\u6210\u5EE3\u6771\u8A71 IG \u5BA3\u50B3\u6587\u6848", "\u6392\u7A0B\u8A02\u55AE\u78BA\u8A8D\u63D0\u9192 + \u53D6\u8CA8\u524D\u81EA\u52D5\u63D0\u793A"] },
      { id: "legal", emoji: "\u2696\uFE0F", name: "\u6CD5\u5F8B", pains: ["\u5408\u7D04\u6587\u4EF6\u9577\u6458\u8981\u8981\u82B1\u5927\u91CF\u6642\u9593", "client \u8DDF\u9032\u591A\u500B\u6848\u4EF6\u96E3\u7BA1\u7406", "\u6CD5\u5F8B\u7814\u7A76\u8017\u6642"], solutions: ["AI \u5FEB\u901F\u6458\u8981\u5408\u7D04\u8981\u9EDE + \u6A19\u8A18\u95DC\u9375\u689D\u6B3E", "\u8A18\u9304\u6BCF\u500B client \u6848\u4EF6\u9032\u5EA6 + \u6392\u7A0B\u8DDF\u9032\u63D0\u9192", "\u641C\u5C0B\u6574\u7406\u76F8\u95DC\u6CD5\u5F8B\u8CC7\u8A0A\u8F14\u52A9\u7814\u7A76"] },
      { id: "insurance", emoji: "\u{1F4BC}", name: "\u4FDD\u96AA", pains: ["\u5BA2\u6236\u7D44\u5408\u8CC7\u6599\u5206\u6563\u96E3\u4EE5\u5FEB\u901F\u4E86\u89E3\u72C0\u6CC1", "\u7522\u54C1\u63A8\u85A6\u6587\u6848\u8981\u56E0\u61C9\u6BCF\u4EBA\u4E0D\u540C", "\u8DDF\u9032\u63D0\u9192\u8981\u4EBA\u624B\u8A2D\u5B9A\u5BB9\u6613\u907A\u6F0F"], solutions: ["AI \u6574\u7406\u5BA2\u6236\u7D44\u5408\u8CC7\u8A0A + \u751F\u6210\u500B\u4EBA\u5316\u6458\u8981", "\u6839\u64DA\u5BA2\u6236\u9700\u6C42\u751F\u6210\u91DD\u5C0D\u6027\u7522\u54C1\u63A8\u85A6\u6587\u6848\u8349\u7A3F", "\u6392\u7A0B\u5404\u985E\u8DDF\u9032\u63D0\u9192\uFF08\u4FDD\u55AE\u7E8C\u671F/\u751F\u65E5/\u5E02\u6CC1\u66F4\u65B0\uFF09"] }
    ];
    const roles = [
      { id: "boss", emoji: "\u{1F454}", name: "\u4E2D\u5C0F\u4F01\u8001\u95C6", messages: [
        { type: "user", text: "\u5E6B\u6211\u641C\u5C0B\u4ECA\u65E5\u9999\u6E2F\u8CA1\u7D93\u65B0\u805E\uFF0C\u91CD\u9EDE\u4FC2 AI \u79D1\u6280\u884C\u696D \u{1F50D}" },
        { type: "ai", text: "\u597D\u5605\uFF01\u6211\u5E6B\u4F60\u6574\u7406\u4ECA\u65E5\u91CD\u9EDE\uFF1A<br><br>\u{1F4CA} <strong>\u79D1\u6280\u677F\u584A</strong><br>1. \u672C\u6E2F AI \u521D\u5275\u878D\u8CC7\u5B63\u589E 35%<br>2. \u653F\u5E9C\u5BA3\u5E03 AI \u6C99\u76D2\u8A66\u9A57\u8A08\u5283<br>3. \u5167\u5730\u79D1\u6280\u80A1\u65E9\u5E02\u53CD\u5F48<br><br>\u9700\u8981\u6211\u6DF1\u5165\u5206\u6790\u67D0\u500B\u8A71\u984C\u55CE\uFF1F" },
        { type: "user", text: "\u5E6B\u6211\u63D0\u9192 3pm \u540C\u5BA2\u6236\u958B\u6703\uFF0C\u6E96\u5099\u4E0B\u8B70\u7A0B" },
        { type: "ai", text: "\u2705 \u5DF2\u8A2D\u5B9A 3pm \u6392\u7A0B\u63D0\u9192\uFF01<br><br>\u6211\u5E6B\u4F60\u6E96\u5099\u8B70\u7A0B\u6846\u67B6\uFF1A<br>1. \u9805\u76EE\u9032\u5EA6\u66F4\u65B0\uFF0810\u5206\u9418\uFF09<br>2. \u554F\u984C\u8A0E\u8AD6\uFF0815\u5206\u9418\uFF09<br>3. \u4E0B\u4E00\u6B65\u884C\u52D5\uFF085\u5206\u9418\uFF09<br><br>\u9700\u8981\u7FFB\u8B6F\u82F1\u6587\u7248\u55CE\uFF1F" }
      ] },
      { id: "marketer", emoji: "\u{1F4E3}", name: "\u884C\u92B7\u4EBA\u54E1", messages: [
        { type: "user", text: "\u5BA2\u6236\u8981\u4ECA\u9031\u4E94\u51FA IG campaign\uFF0C\u5E6B\u6211\u641C\u4E0B\u7AF6\u54C1\u8FD1\u671F\u505A\u5497\u54A9" },
        { type: "ai", text: "\u597D\uFF01\u6211\u641C\u5C0B\u7DCA\u7AF6\u54C1\u8FD1 30 \u65E5 IG \u6D3B\u52D5...<br><br>\u{1F4F1} <strong>\u767C\u73FE 3 \u500B\u8DA8\u52E2\uFF1A</strong><br>1. \u77ED\u8996\u983B Reel \u4FC2\u4E3B\u6D41<br>2. \u7528\u6236\u751F\u6210\u5167\u5BB9\u4E92\u52D5\u7387\u9AD8 3x<br>3. \u9650\u6642\u512A\u60E0 Story \u8F49\u5316\u7387\u6700\u9AD8<br><br>\u5E6B\u4F60\u751F\u6210 3 \u4EFD\u5EE3\u6771\u8A71\u6587\u6848\u65B9\u5411\uFF1F" },
        { type: "user", text: "\u597D\uFF01\u5E6B\u6211\u51FA 3 \u4EFD\u8A0A\u606F\u4E3B\u6253\u9650\u6642\u512A\u60E0" },
        { type: "ai", text: "\u{1F4DD} <strong>\u65B9\u6848 A\uFF08\u7DCA\u8FEB\u611F\uFF09\uFF1A</strong><br>\u300C\u6700\u5F8C 48 \u5C0F\u6642\uFF01\u5462\u500B\u50F9\u9322\u4FC2\u6700\u5F8C\u6A5F\u6703...\u300D<br><br>\u{1F4DD} <strong>\u65B9\u6848 B\uFF08\u793E\u4EA4\u8B49\u660E\uFF09\uFF1A</strong><br>\u300C\u8D85\u904E 1,000 \u500B\u9999\u6E2F\u4EBA\u90FD\u4FC2\u7528\u7DCA...\u300D<br><br>\u{1F4DD} <strong>\u65B9\u6848 C\uFF08\u5229\u76CA\u5C0E\u5411\uFF09\uFF1A</strong><br>\u300C\u5514\u4F7F\u4E00\u9813\u98EF\u9322\uFF0C\u5E6B\u4F60\u7701\u8FD4\u5E7E\u5341\u500B\u5C0F\u6642...\u300D" }
      ] },
      { id: "accountant", emoji: "\u{1F4CA}", name: "\u6703\u8A08\u5E2B", messages: [
        { type: "user", text: "\u6708\u5E95\u5587\uFF0C\u8981 chase 3 \u500B\u5BA2\u4EBA\u88DC\u4EA4\u55AE\u64DA" },
        { type: "ai", text: "\u6536\u5230\uFF01\u6211\u5E6B\u4F60\u751F\u6210\u500B\u4EBA\u5316\u63D0\u9192\u8A0A\u606F \u{1F3AF}<br><br>\u2022 \u8001\u5BA2\u6236 \u2192 \u8F15\u9B06\u53CB\u5584\u7248<br>\u2022 \u65B0\u5BA2\u6236 \u2192 \u5C08\u696D\u6B63\u5F0F\u7248<br>\u2022 \u591A\u6B21\u9072\u4EA4 \u2192 \u6709\u9EDE\u56B4\u8085\u7248<br><br>\u9EDE\u6A23\uFF1F" },
        { type: "user", text: "\u597D\uFF01\u5E6B\u6211\u51FA\u6652\u4F62" },
        { type: "ai", text: "\u2705 \u5DF2\u751F\u6210 3 \u4EFD\u500B\u4EBA\u5316 WhatsApp \u8A0A\u606F\uFF1A<br><br>\u300C\u9673\u751F\u60A8\u597D\uFF0C\u63D0\u9192\u60A8\u6708\u5E95\u8ACB\u8A18\u5F97\u63D0\u4EA4\u55AE\u64DA...\uFF08\u8F15\u9B06\u7248\uFF09\u300D<br>\u300C\u674E\u5C0F\u59D0\u60A8\u597D\uFF0C\u63D0\u9192\u60A8...\uFF08\u6B63\u5F0F\u7248\uFF09\u300D<br>\u300C\u738B\u5148\u751F\u60A8\u597D\uFF0C\u518D\u6B21\u63D0\u9192...\uFF08\u56B4\u8085\u7248\uFF09\u300D<br><br>\u8907\u88FD\u767C\u9001\u5373\u53EF\uFF01\u9700\u8981\u8FFD\u8E64\u56DE\u8986\u72C0\u614B\uFF1F" }
      ] },
      { id: "teacher", emoji: "\u{1F393}", name: "\u6559\u5E2B", messages: [
        { type: "user", text: "\u5E6B\u6211\u5206\u6790\u5462\u7BC7\u5B78\u751F\u4F5C\u6587\uFF0C\u6BD4\u4E0B\u6539\u5584\u5EFA\u8B70" },
        { type: "ai", text: "\u597D\uFF01\u5206\u6790\u5B8C\u7562 \u{1F4DA}<br><br><strong>\u4F5C\u6587\u512A\u9EDE\uFF1A</strong><br>\u2022 \u958B\u982D\u5F15\u984C\u6E05\u6670<br>\u2022 \u8AD6\u9EDE\u6709\u4E00\u5B9A\u908F\u8F2F\u6027<br><br><strong>\u6539\u5584\u65B9\u5411\uFF1A</strong><br>1. \u7B2C 2 \u6BB5\u8AD6\u64DA\u4E0D\u5920\u5177\u9AD4\uFF0C\u5EFA\u8B70\u52A0\u4F8B\u5B50<br>2. \u7D50\u5C3E\u8F03\u5009\u4FC3<br>3. \u53E5\u5B50\u7D50\u69CB\u53EF\u4EE5\u66F4\u591A\u6A23\u5316<br><br>\u5E6B\u4F60\u751F\u6210\u5B78\u751F\u6613\u660E\u5605\u53CD\u994B\u8A9E\u8A00\uFF1F" },
        { type: "user", text: "\u5E6B\u6211\u51FA\u5BB6\u9577\u901A\u77E5\u82F1\u6587\u7248" },
        { type: "ai", text: "\u2705 \u82F1\u6587\u5BB6\u9577\u901A\u77E5\uFF1A<br><br>\u300CDear Parents, We are pleased to inform you that...\uFF08\u5B8C\u6574\u82F1\u6587\u7248\uFF09\u300D<br><br>\u5DF2\u4FDD\u7559\u539F\u672C\u5605\u91CD\u9EDE\u8A0A\u606F\uFF0C\u8A9E\u6C23\u5C08\u696D\u53CB\u5584 \u{1F4E9}" }
      ] },
      { id: "property", emoji: "\u{1F3E0}", name: "\u5730\u7522\u4EE3\u7406", messages: [
        { type: "user", text: "\u65B0\u76E4\u8CC7\u6599\uFF1A\u8343\u70632\u623F500\u544E\uFF0C\u6708\u79DF$12,000\uFF0C\u8FD1\u6E2F\u9435\uFF0C\u5373\u79DF" },
        { type: "ai", text: "\u6536\u5230\uFF01\u5E6B\u4F60\u751F\u6210\u653E\u76E4\u6587\u6848 \u{1F3E0}<br><br><strong>WhatsApp \u5EE3\u64AD\u7248\uFF08\u4E2D\u6587\uFF09\uFF1A</strong><br>\u300C\u{1F525}\u71B1\u76E4\u63A8\u4ECB\uFF5C\u8343\u70632\u623F500\u544E \u6708\u79DF$12,000<br>\u2705\u8FD1\u6E2F\u9435 \u2705\u5373\u79DF \u2705\u4EA4\u901A\u4FBF\u5229<br>\u6709\u610F\u8ACB\u5373\u56DE\u8986\uFF01\u300D<br><br><strong>\u82F1\u6587\u7248\uFF1A</strong><br>\u300CAvailable Now! Tsuen Wan 2BR 500sqft $12,000/mo Near MTR...\u300D" }
      ] }
    ];
    const scenes = [
      { id: "meeting", emoji: "\u{1F4CB}", title: "\u8001\u95C6\u958B\u6703\u524D", context: "\u6709\u91CD\u8981\u6703\u8B70\uFF0C\u9700\u8981\u6E96\u5099\u8CC7\u6599\u548C\u8B70\u7A0B", steps: [
        { emoji: "\u{1F50D}", skill: "\u5373\u6642\u641C\u5C0B", action: "\u641C\u5C0B\u76F8\u95DC\u884C\u696D\u8CC7\u6599" },
        { emoji: "\u{1F4DD}", skill: "\u6587\u4EF6\u6574\u7406", action: "\u6574\u7406\u6210\u8B70\u7A0B\u6458\u8981\u683C\u5F0F" },
        { emoji: "\u{1F310}", skill: "\u7FFB\u8B6F\u6280\u80FD", action: "\u7FFB\u8B6F\u6210\u82F1\u6587\u7248" },
        { emoji: "\u23F0", skill: "\u6392\u7A0B\u63D0\u9192", action: "\u8A2D\u5B9A\u6703\u524D\u6392\u7A0B\u63D0\u9192" }
      ], timeSaved: "\u539F\u672C 1 \u5C0F\u6642 \u2192 \u53EA\u9700 10 \u5206\u9418" },
      { id: "complaint", emoji: "\u{1F624}", title: "\u6536\u5230\u5BA2\u6236\u6295\u8A34", context: "\u5BA2\u4EBA\u4E0D\u6EFF\u610F\u670D\u52D9\uFF0C\u9700\u8981\u5FEB\u901F\u8655\u7406", steps: [
        { emoji: "\u{1F9E0}", skill: "\u6295\u8A34\u5206\u6790", action: "AI \u5206\u6790\u6838\u5FC3\u554F\u984C" },
        { emoji: "\u{1F4BE}", skill: "\u8A18\u61B6\u641C\u5C0B", action: "\u641C\u5C0B\u5BA2\u6236\u6B77\u53F2\u8A18\u9304" },
        { emoji: "\u2709\uFE0F", skill: "\u8349\u64EC\u56DE\u8986", action: "\u8349\u64EC\u5C08\u696D\u9053\u6B49\u56DE\u8986" },
        { emoji: "\u{1F4CC}", skill: "\u4EFB\u52D9\u8FFD\u8E64", action: "\u8A2D\u5B9A follow-up \u6392\u7A0B\u63D0\u9192" }
      ], timeSaved: "\u539F\u672C 40 \u5206\u9418 \u2192 \u53EA\u9700 8 \u5206\u9418" },
      { id: "marketing", emoji: "\u{1F4F1}", title: "\u7B56\u5283\u63A8\u5EE3\u6D3B\u52D5", context: "\u6708\u5E95\u8981\u51FA\u63A8\u5EE3\u65B9\u6848\uFF0C\u7AF6\u722D\u6FC0\u70C8", steps: [
        { emoji: "\u{1F575}\uFE0F", skill: "\u7AF6\u54C1\u7814\u7A76", action: "\u641C\u5C0B\u7AF6\u54C1\u8FD1\u671F\u4FC3\u92B7" },
        { emoji: "\u{1F4CA}", skill: "\u5E02\u5834\u5206\u6790", action: "SWOT \u5206\u6790" },
        { emoji: "\u270D\uFE0F", skill: "\u6587\u6848\u751F\u6210", action: "\u751F\u6210\u591A\u500B\u63A8\u5EE3\u65B9\u6848" },
        { emoji: "\u{1F3A8}", skill: "\u5716\u7247\u751F\u6210", action: "\u51FA\u914D\u5716\u5EFA\u8B70" }
      ], timeSaved: "\u539F\u672C\u6574\u65E5 \u2192 \u53EA\u9700 2 \u5C0F\u6642" },
      { id: "project", emoji: "\u{1F680}", title: "\u63A5\u5230\u65B0\u9805\u76EE", context: "\u65B0\u5BA2\u6236\u9805\u76EE\uFF0C\u9700\u8981\u5FEB\u901F\u51FA\u8A08\u5283\u66F8", steps: [
        { emoji: "\u{1F50D}", skill: "\u884C\u696D\u7814\u7A76", action: "\u641C\u5C0B\u884C\u696D\u80CC\u666F\u8CC7\u6599" },
        { emoji: "\u{1F4C4}", skill: "\u8A08\u5283\u66F8", action: "\u751F\u6210\u8A08\u5283\u66F8\u8349\u7A3F" },
        { emoji: "\u{1F310}", skill: "\u7FFB\u8B6F", action: "\u7FFB\u8B6F\u82F1\u6587\u5BA2\u6236\u7248" },
        { emoji: "\u{1F4C5}", skill: "\u6392\u7A0B\u63D0\u9192", action: "\u8A2D\u5B9A\u5404\u968E\u6BB5 deadline \u6392\u7A0B\u63D0\u9192" }
      ], timeSaved: "\u539F\u672C 3 \u65E5 \u2192 \u53EA\u9700\u534A\u65E5" },
      { id: "report", emoji: "\u{1F4CA}", title: "\u6708\u5E95\u696D\u7E3E\u5831\u544A", context: "\u6574\u7406 Excel \u6578\u64DA\uFF0C\u51FA\u6708\u5EA6\u5831\u544A", steps: [
        { emoji: "\u{1F4C1}", skill: "\u6578\u64DA\u6574\u5408", action: "\u6574\u5408\u591A\u500B Excel \u6A94\u6848" },
        { emoji: "\u{1F4C8}", skill: "KPI \u5206\u6790", action: "\u8A08\u7B97\u9054\u6210\u7387 + MoM \u5C0D\u6BD4" },
        { emoji: "\u270D\uFE0F", skill: "\u5831\u544A\u751F\u6210", action: "AI \u751F\u6210\u884C\u52D5\u5EFA\u8B70" },
        { emoji: "\u{1F4E7}", skill: "Email \u767C\u9001", action: "\u6392\u7A0B\u767C\u9001 PDF \u5831\u544A" }
      ], timeSaved: "\u539F\u672C 4-6 \u5C0F\u6642 \u2192 \u53EA\u9700 10 \u5206\u9418" },
      { id: "meeting-rec", emoji: "\u{1F399}\uFE0F", title: "\u6703\u8B70\u9304\u97F3\u6574\u7406", context: "\u9304\u97F3\u6A94\u8F49\u6703\u8B70\u7D00\u9304 + Action Items", steps: [
        { emoji: "\u{1F3A7}", skill: "\u8A9E\u97F3\u8F49\u6587\u5B57", action: "STT \u8655\u7406\u9304\u97F3" },
        { emoji: "\u{1F4CB}", skill: "\u6703\u8B70\u6458\u8981", action: "\u63D0\u53D6\u6C7A\u7B56 + \u884C\u52D5\u9805\u76EE" },
        { emoji: "\u23F0", skill: "\u6392\u7A0B\u63D0\u9192", action: "\u8A2D\u5B9A\u5404 action \u622A\u6B62\u63D0\u9192" },
        { emoji: "\u{1F4E7}", skill: "Email \u767C\u9001", action: "\u767C\u9001\u6703\u8B70\u7D00\u9304\u7D66\u8207\u6703\u8005" }
      ], timeSaved: "\u539F\u672C 1-3 \u5C0F\u6642 \u2192 \u53EA\u9700 10 \u5206\u9418" },
      { id: "sem-report", emoji: "\u{1F4C8}", title: "SEM \u8868\u73FE\u5831\u544A", context: "Google Ads CSV \u51FA\u6BCF\u6708\u5BA2\u6236\u5831\u544A", steps: [
        { emoji: "\u{1F4C2}", skill: "CSV \u5206\u6790", action: "\u5206\u6790\u5404 Campaign \u8868\u73FE" },
        { emoji: "\u{1F4CA}", skill: "\u6578\u64DA\u8996\u89BA\u5316", action: "\u751F\u6210\u5716\u8868 + MoM \u5C0D\u6BD4" },
        { emoji: "\u270D\uFE0F", skill: "\u96D9\u8A9E\u5831\u544A", action: "\u64B0\u5BEB\u4E2D\u82F1\u6587\u5831\u544A" },
        { emoji: "\u{1F4E7}", skill: "Email \u767C\u9001", action: "\u6392\u7A0B email \u7D66\u5BA2\u6236" }
      ], timeSaved: "\u539F\u672C 3-5 \u5C0F\u6642 \u2192 \u53EA\u9700 10 \u5206\u9418" },
      { id: "edm", emoji: "\u{1F4E8}", title: "EDM + \u793E\u4EA4\u5A92\u9AD4", context: "\u4E00\u6B21\u904E\u51FA\u591A\u6E20\u9053\u6587\u6848", steps: [
        { emoji: "\u{1F4DD}", skill: "\u6587\u6848\u751F\u6210", action: "\u751F\u6210 EDM/IG/FB \u4E09\u500B\u6E20\u9053" },
        { emoji: "\u{1F3A8}", skill: "\u5716\u7247\u751F\u6210", action: "Nano Banana Pro \u751F\u6210\u914D\u5957\u5716" },
        { emoji: "\u{1F4E8}", skill: "\u6392\u7248\u8F38\u51FA", action: "EDM HTML \u6392\u7248" },
        { emoji: "\u{1F4E7}", skill: "Email \u767C\u9001", action: "email \u8349\u7A3F\u4FFE reviewer" }
      ], timeSaved: "\u539F\u672C 3-4 \u5C0F\u6642 \u2192 \u53EA\u9700 15 \u5206\u9418" }
    ];
    const personas = [
      { id: 1, emoji: "\u{1F9D1}\u200D\u{1F4BC}", name: "\u9673\u5148\u751F", role: "\u96F6\u552E\u5E97\u8001\u95C6 \xB7 \u65FA\u89D2 3 \u9593\u9580\u5E02", pain: "\u6BCF\u65E5 WhatsApp \u56DE\u8986\u5BA2\u4EBA\u540C\u57CB\u8FFD\u8CA8\uFF0C\u53C8\u8981\u7BA1\u5E33\uFF0C\u5206\u8EAB\u4E0D\u6687", solution: "AI \u81EA\u52D5\u6574\u7406\u5BA2\u4EBA\u67E5\u8A62 + \u8FFD\u8E64\u8A02\u55AE + \u751F\u6210\u9031\u5831\uFF0C\u4E00\u500B\u52A9\u624B\u9802\u5169\u500B\u517C\u8077" },
      { id: 2, emoji: "\u{1F485}", name: "Mandy", role: "\u7F8E\u5BB9\u9662\u8001\u95C6\u5A18 \xB7 \u9285\u947C\u7063", pain: "\u60F3\u505A IG \u5BA3\u50B3\uFF0C\u4F46\u6BCF\u6B21\u90FD\u5514\u77E5\u5BEB\u54A9\u3001\u914D\u54A9\u5716\uFF0C\u597D\u82B1\u6642\u9593", solution: "AI \u76F4\u63A5\u751F\u6210\u5EE3\u6771\u8A71\u6587\u6848 + \u914D\u5716 + \u6392\u7A0B\u9810\u7D04\u63D0\u9192\uFF0C\u6574\u500B\u6D41\u7A0B\u4E00\u689D\u9F8D" },
      { id: 3, emoji: "\u{1F3E0}", name: "Victor", role: "\u5730\u7522\u4EE3\u7406 \xB7 \u4E5D\u9F8D\u5340\u79DF\u52D9", pain: "\u653E\u76E4\u8981\u4E2D\u82F1\u5C0D\u7167\u3001WhatsApp \u8DDF\u9032 + \u7747\u6A13\u63D0\u9192\uFF0C\u597D\u591A\u7E41\u7463\u5DE5\u4F5C", solution: "AI \u81EA\u52D5\u751F\u6210\u4E2D\u82F1\u653E\u76E4\u6587\u6848 + \u6392\u7A0B\u63D0\u9192\u5BA2\u4EBA + \u8A18\u61B6\u8DDF\u9032\u9032\u5EA6" },
      { id: 4, emoji: "\u{1F4CA}", name: "Joyce", role: "\u6703\u8A08\u5E2B \xB7 \u8343\u7063 SME \u5BA2\u6236", pain: "Chase \u5BA2\u4EBA\u4EA4\u55AE\u64DA\u597D\u8CBB\u795E\uFF0C\u6BCF\u6B21\u9010\u500B WhatsApp\uFF0C\u56DE\u8986\u53C8\u6162", solution: "AI \u81EA\u52D5\u8B58\u5225\u6B20\u4EA4\u540D\u55AE\uFF0C\u6279\u91CF\u500B\u4EBA\u5316 WhatsApp \u6392\u7A0B\u63D0\u9192\uFF0C\u56DE\u8986\u7387\u5927\u5E45\u63D0\u5347" },
      { id: 5, emoji: "\u{1F35C}", name: "Benny", role: "\u8336\u9910\u5EF3\u6771\u4E3B \xB7 \u6DF1\u6C34\u57D7", pain: "\u624B\u5BEB\u4ECA\u65E5\u7279\u5225\u9910\u55AE\u597D\u9EBB\u7169\uFF0C\u53C8\u60F3\u8A66\u8A66 IG Story\uFF0C\u4F46\u5514\u8B58\u8A2D\u8A08", solution: "AI \u4E00\u53E5\u8A71\u66F4\u65B0\u9910\u55AE + \u5373\u51FA IG Story \u5716 + \u5E6B\u4F60\u4F30\u7B97\u98DF\u6750\u9700\u6C42" },
      { id: 6, emoji: "\u{1F4E6}", name: "Andy", role: "\u5FEB\u905E\u516C\u53F8 \xB7 \u8475\u6D8C 7 \u4EBA", pain: "\u6D3E\u55AE\u8981\u6574\u7406 WhatsApp \u8A0A\u606F\uFF0C\u5BA2\u4EBA\u554F\u55AE\u8FFD\u8E64\u53C8\u8981\u9010\u689D\u56DE", solution: "AI \u81EA\u52D5\u6574\u7406\u8A02\u55AE\u8CC7\u6599 + \u751F\u6210\u6D3E\u9001\u66F4\u65B0 + \u6279\u91CF\u56DE\u8986\u5BA2\u4EBA\u67E5\u8A62" },
      { id: 7, emoji: "\u{1F3E5}", name: "Dr. Chan", role: "\u7259\u79D1\u8A3A\u6240 \xB7 \u6C99\u7530", pain: "\u9810\u7D04\u96FB\u8A71\u63A5\u5514\u5B8C\uFF0C\u8986\u8A3A\u63D0\u9192\u8981\u4EBA\u624B\u6253\uFF0C\u5BB9\u6613\u6F0F", solution: "AI \u6574\u7406\u9810\u7D04\u65E5\u7A0B + \u81EA\u52D5\u6279\u91CF\u767C\u9001\u8986\u8A3A WhatsApp \u63D0\u9192\uFF0C\u524D\u53F0\u8F15\u9B06\u4E86" },
      { id: 8, emoji: "\u{1F3CB}\uFE0F", name: "Grace", role: "\u745C\u73C8\u5BA4\u8001\u95C6 \xB7 \u897F\u74B0", pain: "\u8AB2\u5802\u6392\u8868\u6539\u5B8C\u53C8\u6539\uFF0C\u6703\u54E1\u5230\u671F\u5514\u8A18\u5F97\u901A\u77E5\uFF0C\u6D41\u5931\u7387\u9AD8", solution: "AI \u6574\u7406\u8AB2\u5802\u6642\u9593\u8868 + \u6392\u7A0B\u6703\u54E1\u7E8C\u8CBB\u63D0\u9192 + \u751F\u6210 IG \u6587\u6848\uFF0C\u7BC0\u7701\u5927\u91CF\u6642\u9593" },
      { id: 9, emoji: "\u{1F3D7}\uFE0F", name: "Simon", role: "\u88DD\u4FEE\u516C\u53F8\u8001\u95C6 \xB7 \u89C0\u5858", pain: "\u6BCF\u4EFD\u5831\u50F9\u55AE\u90FD\u8981\u91CD\u65B0\u6574\uFF0C\u540C\u6642\u8DDF 5 \u500B\u9805\u76EE\u9032\u5EA6\u9760\u8A18\u6027", solution: "AI \u5FEB\u901F\u751F\u6210\u5831\u50F9\u55AE\u8349\u7A3F + \u6574\u7406\u9805\u76EE\u9032\u5EA6\u4E00\u89BD\u8868 + \u6392\u7A0B\u5BA2\u6236\u8DDF\u9032\u63D0\u9192" },
      { id: 10, emoji: "\u{1F3A8}", name: "Kelly", role: "\u81EA\u7531\u8A2D\u8A08\u5E2B", pain: "\u5BA2\u6236 brief \u6563\u843D WhatsApp\uFF0C\u767C\u7968 chase \u5514\u5230\u9322\uFF0C\u9805\u76EE\u72C0\u614B\u8A18\u5514\u6E05", solution: "AI \u6574\u7406\u5BA2\u6236 brief \u6458\u8981 + \u6392\u7A0B\u5831\u50F9\u8DDF\u9032\u63D0\u9192 + \u751F\u6210\u50AC\u6536\u8A0A\u606F" },
      { id: 11, emoji: "\u2696\uFE0F", name: "Kenneth", role: "\u5F8B\u5E2B \xB7 \u4E2D\u74B0", pain: "\u5408\u7D04\u6587\u4EF6\u9577\uFF0C\u6458\u8981\u8017\u6642\uFF1B\u591A\u500B client \u8DDF\u9032\u5BB9\u6613\u6F0F", solution: "AI \u5FEB\u901F\u6458\u8981\u5408\u7D04\u8981\u9EDE + \u6574\u7406\u5404 client \u6848\u4EF6\u9032\u5EA6 + \u6392\u7A0B\u8DDF\u9032\u63D0\u9192" },
      { id: 12, emoji: "\u{1F4BC}", name: "Michelle", role: "\u4FDD\u96AA\u9867\u554F \xB7 IFA", pain: "\u5BA2\u6236\u7D44\u5408\u5206\u6563\uFF0C\u63A8\u85A6\u6587\u6848\u8981\u56E0\u4EBA\u800C\u7570\uFF0C\u8DDF\u9032\u63D0\u9192\u9760\u8A18\u6027\u5BB9\u6613\u907A\u6F0F", solution: "AI \u6574\u7406\u5BA2\u6236\u7D44\u5408\u6458\u8981 + \u751F\u6210\u500B\u4EBA\u5316\u63A8\u85A6\u6587\u6848\u8349\u7A3F + \u6392\u7A0B\u4FDD\u55AE\u7E8C\u671F\u63D0\u9192" }
    ];
    const painPoints = [
      { id: 1, emoji: "\u{1F512}", title: "ChatGPT \u9999\u6E2F\u5C01\u9396", desc: "\u9700\u8981 VPN\uFF0C\u8907\u96DC\u53C8\u6709\u6CD5\u5F8B\u98A8\u96AA" },
      { id: 2, emoji: "\u{1F9E0}", title: "AI \u5514\u8A18\u5F97\u6211\u4FC2\u908A\u500B", desc: "\u6BCF\u6B21\u90FD\u8981\u7531\u982D\u89E3\u91CB\u80CC\u666F" },
      { id: 3, emoji: "\u{1F4B0}", title: "\u4E00\u5806\u5DE5\u5177\uFF0C\u597D\u6563\u597D\u8CB4", desc: "\u6BCF\u6708 HK$2,000+ \u8A02\u95B1\u8CBB" },
      { id: 4, emoji: "\u{1F510}", title: "\u6015\u696D\u52D9\u8CC7\u6599\u5916\u6D29", desc: "\u6578\u64DA\u53BB\u5497\u7F8E\u570B\uFF0C\u53D7\u5916\u570B\u6CD5\u5F8B\u7BA1" }
    ];
    const securityPromises = [
      { id: 1, emoji: "\u{1F1EF}\u{1F1F5}", title: "\u6578\u64DA\u5B58\u4E9E\u592A\u5340\uFF08\u65E5\u672C\uFF09", desc: "\u7528\u6236\u5C0D\u8A71\u8A18\u9304\u5132\u5B58\u65BC Tencent Cloud \u65E5\u672C\u6578\u64DA\u4E2D\u5FC3\uFF0C\u5514\u53BB\u7F8E\u570B\uFF0C\u53D7\u4E9E\u592A\u5730\u5340\u6CD5\u5F8B\u4FDD\u8B77\u3002" },
      { id: 2, emoji: "\u{1F512}", title: "\u7D55\u4E0D\u8A13\u7DF4\u6A21\u578B", desc: "\u4F60\u7684\u696D\u52D9\u8CC7\u6599\u53EA\u5C6C\u65BC\u4F60\u3002PersonAI \u627F\u8AFE\u7D55\u4E0D\u4F7F\u7528\u5BA2\u6236\u5C0D\u8A71\u4F5C\u4EFB\u4F55 AI \u6A21\u578B\u8A13\u7DF4\u7528\u9014\uFF0C\u5514\u505A\u5EE3\u544A\u3002" },
      { id: 3, emoji: "\u{1F1ED}\u{1F1F0}", title: "PDPO \u5408\u898F", desc: "PersonAI \u7531\u9999\u6E2F\u516C\u53F8\u904B\u71DF\uFF0C\u5B8C\u5168\u7B26\u5408\u300A\u500B\u4EBA\u8CC7\u6599\uFF08\u79C1\u96B1\uFF09\u689D\u4F8B\u300B\uFF08PDPO\uFF09\u8981\u6C42\uFF0C\u53EF\u63D0\u4F9B DPA\u3002" }
    ];
    const certifications = ["ISO 27001", "SOC 2 Type 2", "CSA STAR", "PDPO \u5408\u898F", "Tencent Cloud"];
    const coachItems = [
      "30 \u5206\u9418 Onboarding\uFF1A\u8ABF\u6559 AI \u4E86\u89E3\u4F60\u7684\u884C\u696D\u540C\u5DE5\u4F5C\u65B9\u5F0F",
      "\u907F\u514D\u8E29\u96F7\uFF1A\u5E38\u898B\u932F\u8AA4\u7528\u6CD5\u9810\u9632\uFF0C\u5E6B\u4F60\u5C11\u8D70\u5F4E\u8DEF",
      "\u5FEB\u901F\u4E0A\u624B\uFF1A\u638C\u63E1 60+ \u6280\u80FD\u7684\u6838\u5FC3\u7528\u6CD5",
      "\u6301\u7E8C\u512A\u5316\uFF1A\u6BCF\u6708 1 \u6B21 review \u8DDF\u9032\uFF0C\u78BA\u4FDD\u6301\u7E8C\u6709\u6548"
    ];
    const pricingPlans = [
      { id: "starter", name: "Starter", target: "\u500B\u4EBA / SOHO", price: "HK$298", period: "/\u6708", featured: false, features: ["1 \u500B WhatsApp \u5E33\u865F", "60+ \u6280\u80FD\u5168\u5305", "\u5EE3\u6771\u8A71\u512A\u5316", "\u6C38\u4E45\u8A18\u61B6", "\u4E9E\u592A\u5340\u6578\u64DA\u5132\u5B58\uFF08\u65E5\u672C\uFF09", "PDPO \u5408\u898F"] },
      { id: "business", name: "Business", target: "SME \u9996\u9078", price: "HK$680", period: "/\u6708", featured: true, features: ["\u6700\u591A 5 \u500B\u5E33\u865F", "60+ \u6280\u80FD\u5168\u5305", "\u5EE3\u6771\u8A71\u512A\u5316", "\u6C38\u4E45\u8A18\u61B6", "\u4E9E\u592A\u5340\u6578\u64DA\u5132\u5B58\uFF08\u65E5\u672C\uFF09", "PDPO \u5408\u898F", "\u512A\u5148\u6280\u8853\u652F\u63F4", "\u6708\u5EA6\u4F7F\u7528\u5831\u544A"] },
      { id: "enterprise", name: "Enterprise", target: "\u5927\u578B\u4F01\u696D", price: "\u6309\u9700\u5B9A\u5236", period: "", featured: false, features: ["\u7121\u9650\u5E33\u865F", "\u81EA\u8A02 AI \u500B\u6027", "\u5C08\u5C6C\u884C\u696D\u6578\u64DA\u5EAB", "\u8207\u73FE\u6709\u7CFB\u7D71\u6574\u5408", "\u5C08\u5C6C\u5BA2\u6236\u6210\u529F\u7D93\u7406", "SLA \u4FDD\u969C", "\u53EF\u7C3D DPA"] }
    ];
    const faqs = [
      { q: "PersonAI \u4FC2\u54A9\uFF1F\u540C ChatGPT \u6709\u54A9\u5206\u5225\uFF1F", a: "PersonAI \u4FC2\u4F4F\u55BA\u4F60 WhatsApp \u7684 AI \u52A9\u624B\uFF0C\u7121\u9700\u5B89\u88DD\u4EFB\u4F55 App\uFF0C\u5EE3\u6771\u8A71\u539F\u751F\uFF0C\u6709\u6C38\u4E45\u8A18\u61B6\u529F\u80FD\uFF0C\u6578\u64DA\u5132\u5B58\u4E9E\u592A\u5340\uFF08\u65E5\u672C\uFF09\u3002\u76F8\u6BD4 ChatGPT\uFF0C\u9999\u6E2F\u76F4\u63A5\u53EF\u7528\uFF0C\u5514\u9700\u8981 VPN\uFF0C\u800C\u4E14\u6C38\u9060\u8A18\u5F97\u4F60\u4FC2\u8AB0\u3002" },
      { q: "\u6709\u5187\u514D\u8CBB\u8A66\u7528\uFF1F", a: "\u6709\uFF01\u6240\u6709\u65B9\u6848\u63D0\u4F9B 14 \u65E5\u514D\u8CBB\u8A66\u7528\uFF0C\u7121\u9700\u4FE1\u7528\u5361\u3002\u5B8C\u6210\u8A66\u7528\u5F8C\u5148\u6C7A\u5B9A\u4FC2\u54AA\u7E7C\u7E8C\u3002" },
      { q: "\u6211\u7684\u5C0D\u8A71\u6578\u64DA\u6703\u5514\u6703\u53BB\u5497\u7F8E\u570B\uFF1F", a: "\u5514\u6703\uFF01PersonAI \u7528\u6236\u5C0D\u8A71\u8A18\u9304\u5132\u5B58\u65BC Tencent Cloud \u65E5\u672C\uFF08\u4E9E\u592A\u5340\uFF09\u6578\u64DA\u4E2D\u5FC3\uFF0C\u5514\u6703\u53BB\u7F8E\u570B\uFF0C\u53D7\u4E9E\u592A\u5730\u5340\u6CD5\u5F8B\u4FDD\u8B77\u3002" },
      { q: "PersonAI \u6703\u5514\u6703\u7528\u6211\u7684\u8CC7\u6599\u8A13\u7DF4 AI\uFF1F", a: "\u7D55\u5C0D\u5514\u6703\uFF01\u6211\u54CB\u7684\u627F\u8AFE\u4FC2\uFF1A\u4F60\u7684\u696D\u52D9\u8CC7\u6599\u53EA\u5C6C\u65BC\u4F60\uFF0C\u7D55\u4E0D\u7528\u65BC\u4EFB\u4F55 AI \u8A13\u7DF4\uFF0C\u4EA6\u4E0D\u505A\u5EE3\u544A\u5B9A\u5411\u3002" },
      { q: "\u9EDE\u6A23\u958B\u59CB\u4F7F\u7528\uFF1F\u8981\u5B89\u88DD\u4E5C\u5622 App \u55CE\uFF1F", a: "\u5514\u9700\u8981\u5B89\u88DD\u4EFB\u4F55 App\uFF01\u53EA\u9700\u8981\u55BA WhatsApp \u52A0 PersonAI \u70BA\u806F\u7D61\u4EBA\uFF0C\u76F4\u63A5\u5C0D\u8A71\u5C31\u53EF\u4EE5\u3002WhatsApp \u4F60\u672C\u8EAB\u5C31\u6709\uFF0C\u96F6\u5B78\u7FD2\u6210\u672C\u3002" },
      { q: "\u53EF\u4EE5\u96A8\u6642\u53D6\u6D88\u55CE\uFF1F", a: "\u53EF\u4EE5\uFF01\u6240\u6709\u65B9\u6848\u5747\u4FC2\u6708\u4ED8\uFF0C\u96A8\u6642\u53EF\u4EE5\u53D6\u6D88\uFF0C\u7121\u9055\u7D04\u91D1\u3002" }
    ];
    const currentIndustry = computed(() => industries.find((i) => i.id === activeIndustry.value));
    const currentScene = computed(() => scenes.find((s) => s.id === activeScene.value));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)}><section class="section-hero grid-texture pt-16 pb-24 relative"><div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div class="text-center lg:text-left"><div class="badge mb-6 inline-flex">\u{1F1ED}\u{1F1F0} \u9999\u6E2F SME \u5C08\u5C6C \xB7 \u5514\u9700\u8981 VPN</div><h1 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"> \u4F4F\u55BA\u4F60<br><span class="gradient-text">WhatsApp</span> \u7684<br>24 \u5C0F\u6642\u5168\u80FD AI \u52A9\u624B </h1><p class="text-lg text-[#94A3B8] mb-8 leading-relaxed"> \u5EE3\u6771\u8A71\u539F\u751F \xB7 \u6C38\u4E45\u8A18\u61B6 \xB7 60+ \u6280\u80FD \xB7 \u6578\u64DA\u5B58\u4E9E\u592A\u5340\uFF08\u65E5\u672C\uFF09<br> \u5514\u8A13\u7DF4\u6A21\u578B \xB7 PDPO \u5408\u898F \xB7 \u771F\u4EBA WhatsApp \u6280\u8853\u652F\u63F4 </p><div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/early-access",
        class: "btn-primary text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u{1F680} \u958B\u59CB 14 \u65E5\u514D\u8CBB\u8A66\u7528`);
          } else {
            return [
              createTextVNode("\u{1F680} \u958B\u59CB 14 \u65E5\u514D\u8CBB\u8A66\u7528")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/features",
        class: "btn-secondary text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u{1F4D6} \u4E86\u89E3\u529F\u80FD`);
          } else {
            return [
              createTextVNode("\u{1F4D6} \u4E86\u89E3\u529F\u80FD")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-wrap gap-2 justify-center lg:justify-start"><span class="trust-badge">\u{1F3E2} Hostlink \xD7 Area2</span><span class="trust-badge">\u{1F512} PDPO \u5408\u898F</span><span class="trust-badge">\u{1F1EF}\u{1F1F5} \u6578\u64DA\u5B58\u65E5\u672C</span><span class="trust-badge">\u2705 ISO 27001</span></div></div><div class="flex justify-center"><div class="demo-phone w-full max-w-sm animate-float"><div class="demo-phone-header"><div class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-xl">\u{1F916}</div><div><div class="font-semibold text-sm text-white">PersonAI</div><div class="text-xs text-green-200">\u25CF \u5728\u7DDA</div></div></div><div class="demo-phone-body"><div class="chat-bubble-user text-sm">\u5E6B\u6211\u641C\u5C0B\u4ECA\u65E5\u9999\u6E2F\u8CA1\u7D93\u65B0\u805E\uFF0C\u91CD\u9EDE\u4FC2 AI \u79D1\u6280\u884C\u696D \u{1F50D}</div><div class="chat-bubble-ai text-sm"><div class="font-semibold text-blue-400 mb-1">\u{1F916} PersonAI</div> \u597D\u5605\uFF01\u6211\u5E6B\u4F60\u6574\u7406\uFF1A<br><br>\u{1F4CA} <strong>\u4ECA\u65E5\u91CD\u9EDE</strong><br>1. \u963F\u91CC\u5DF4\u5DF4 AI \u696D\u52D9\u5B63\u5EA6\u589E\u9577 28%<br>2. \u9999\u6E2F\u91D1\u7BA1\u5C40\u767C\u5E03 AI \u76E3\u7BA1\u6307\u5F15<br>3. \u672C\u5730 FinTech \u878D\u8CC7\u5275\u6B77\u53F2\u65B0\u9AD8<br><br>\u9700\u8981\u6211\u6DF1\u5165\u5206\u6790\u67D0\u500B\u8A71\u984C\u55CE\uFF1F </div><div class="chat-bubble-user text-sm">\u540C\u57CB\u5E6B\u6211\u63D0\u9192 3pm \u540C\u5BA2\u6236\u958B\u6703</div><div class="chat-bubble-ai text-sm"><div class="font-semibold text-blue-400 mb-1">\u{1F916} PersonAI</div> \u2705 \u5DF2\u8A2D\u5B9A\uFF01\u6211\u6703\u55BA 2:45pm \u6309\u6392\u7A0B\u767C\u4F60\u63D0\u9192\uFF0C\u9806\u5E36\u6574\u7406\u8B70\u7A0B\u6458\u8981\u3002 </div></div></div></div></div></div></section><section class="section-darker py-20"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-black mb-4">\u4F60\u4FC2\u54AA\u90FD\u6709\u5462\u5E7E\u500B\u554F\u984C\uFF1F \u{1F914}</h2><p class="text-[#94A3B8] text-lg">PersonAI \u5168\u90E8\u5E6B\u4F60\u89E3\u6C7A</p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
      ssrRenderList(painPoints, (pain) => {
        _push(`<div class="feature-card text-center"><div class="text-3xl mb-4">${ssrInterpolate(pain.emoji)}</div><h3 class="font-bold text-white mb-2 text-sm">${ssrInterpolate(pain.title)}</h3><p class="text-[#94A3B8] text-xs leading-relaxed">${ssrInterpolate(pain.desc)}</p></div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-10"><span class="gradient-text font-black text-lg">\u2193 PersonAI \u5168\u90E8\u89E3\u6C7A \u2193</span></div></div></section><section class="section-blue py-20"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-10"><h2 class="text-3xl md:text-4xl font-black mb-4">PersonAI \u9EDE\u5E6B\u4F60\uFF1F\u63C0\u4F60\u5605\u884C\u696D \u{1F447}</h2><p class="text-[#94A3B8]">\u7747\u5413 PersonAI \u9EDE\u70BA\u4F60\u89E3\u6C7A\u75DB\u9EDE</p></div><div class="flex gap-2 overflow-x-auto pb-4 mb-8"><!--[-->`);
      ssrRenderList(industries, (ind) => {
        _push(`<button class="${ssrRenderClass([{ active: unref(activeIndustry) === ind.id }, "industry-tab flex-shrink-0"])}">${ssrInterpolate(ind.emoji)} ${ssrInterpolate(ind.name)}</button>`);
      });
      _push(`<!--]--></div>`);
      if (unref(currentIndustry)) {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-8"><div class="glass-card p-6"><h3 class="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">\u{1F4CA} \u4F60\u7684\u75DB\u9EDE</h3><ul class="space-y-3"><!--[-->`);
        ssrRenderList(unref(currentIndustry).pains, (pain) => {
          _push(`<li class="flex items-start gap-3"><span class="text-red-400 mt-0.5">\u2717</span><span class="text-[#E2E8F0] text-sm">${ssrInterpolate(pain)}</span></li>`);
        });
        _push(`<!--]--></ul></div><div class="glass-card p-6"><h3 class="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">\u2728 PersonAI \u5982\u4F55\u89E3\u6C7A</h3><ul class="space-y-3"><!--[-->`);
        ssrRenderList(unref(currentIndustry).solutions, (sol) => {
          _push(`<li class="flex items-start gap-3"><span class="text-green-400 mt-0.5">\u2713</span><span class="text-[#E2E8F0] text-sm">${ssrInterpolate(sol)}</span></li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="text-center mt-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/early-access",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u{1F4AC} \u9AD4\u9A57 PersonAI \u5E6B\u4F60\u89E3\u6C7A \u2192`);
          } else {
            return [
              createTextVNode("\u{1F4AC} \u9AD4\u9A57 PersonAI \u5E6B\u4F60\u89E3\u6C7A \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="section-darker py-20"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-10"><h2 class="text-3xl md:text-4xl font-black mb-4">\u9AD4\u9A57\u4E00\u4E0B\uFF0CPersonAI \u9EDE\u5E6B\u4F60\uFF1F \u{1F3AD}</h2><p class="text-[#94A3B8]">\u9078\u64C7\u4F60\u5605\u8EAB\u4EFD\uFF0C\u7747\u6A21\u64EC\u5C0D\u8A71</p></div><div class="flex gap-2 overflow-x-auto pb-4 mb-8 justify-center flex-wrap"><!--[-->`);
      ssrRenderList(roles, (role) => {
        _push(`<button class="${ssrRenderClass([{ active: unref(activeRole) === role.id }, "role-btn"])}">${ssrInterpolate(role.emoji)} ${ssrInterpolate(role.name)}</button>`);
      });
      _push(`<!--]--></div><div class="max-w-md mx-auto"><div class="demo-phone"><div class="demo-phone-header"><div class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-xl">\u{1F916}</div><div><div class="font-semibold text-sm text-white">PersonAI</div><div class="text-xs text-green-200">\u25CF \u5728\u7DDA</div></div></div><div class="demo-phone-body" style="${ssrRenderStyle({ "min-height": "300px" })}"><!--[-->`);
      ssrRenderList(unref(visibleMessages), (msg, idx) => {
        var _a;
        _push(`<div class="${ssrRenderClass([msg.type === "user" ? "chat-bubble-user" : "chat-bubble-ai", "text-sm"])}">`);
        if (msg.type === "ai") {
          _push(`<span class="font-semibold text-blue-400 mb-1 block">\u{1F916} PersonAI</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span>${(_a = msg.text) != null ? _a : ""}</span></div>`);
      });
      _push(`<!--]-->`);
      if (unref(isTyping)) {
        _push(`<div class="chat-bubble-ai"><div class="typing-dots flex gap-1 items-center py-1"><span></span><span></span><span></span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="text-center mt-6 flex gap-4 justify-center"><button class="btn-secondary text-sm px-6 py-3">\u{1F504} \u518D\u7747\u4E00\u6B21</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/early-access",
        class: "btn-whatsapp text-sm px-6 py-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u{1F680} \u89AA\u8EAB\u8A66\u7528 \u2192`);
          } else {
            return [
              createTextVNode("\u{1F680} \u89AA\u8EAB\u8A66\u7528 \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="section-blue py-20"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-10"><h2 class="text-3xl md:text-4xl font-black mb-4">\u771F\u5BE6\u5DE5\u4F5C\u60C5\u666F\uFF0C\u7747\u5413 PersonAI \u9EDE\u5E6B\u4F60 \u26A1</h2><p class="text-[#94A3B8]">\u4E00\u500B\u6307\u4EE4\uFF0C\u641E\u6382\u591A\u500B\u6B65\u9A5F</p></div><div class="flex gap-2 overflow-x-auto pb-4 mb-8 justify-center flex-wrap"><!--[-->`);
      ssrRenderList(scenes, (scene) => {
        _push(`<button class="${ssrRenderClass([{ active: unref(activeScene) === scene.id }, "role-btn text-sm"])}">${ssrInterpolate(scene.emoji)} ${ssrInterpolate(scene.title)}</button>`);
      });
      _push(`<!--]--></div>`);
      if (unref(currentScene)) {
        _push(`<div class="glass-card p-8 max-w-3xl mx-auto"><div class="flex items-center gap-3 mb-6"><span class="text-3xl">${ssrInterpolate(unref(currentScene).emoji)}</span><div><h3 class="text-xl font-bold text-white">${ssrInterpolate(unref(currentScene).title)}</h3><p class="text-[#94A3B8] text-sm">${ssrInterpolate(unref(currentScene).context)}</p></div></div><div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6"><!--[-->`);
        ssrRenderList(unref(currentScene).steps, (step, idx) => {
          _push(`<div class="text-center"><div class="w-12 h-12 rounded-full bg-[#1E293B] border border-[#334155] flex items-center justify-center text-xl mx-auto mb-2">${ssrInterpolate(step.emoji)}</div><div class="text-xs font-bold text-[#94A3B8] mb-1">${ssrInterpolate(step.skill)}</div><div class="text-xs text-[#64748B]">${ssrInterpolate(step.action)}</div></div>`);
        });
        _push(`<!--]--></div><div class="text-center"><span class="badge badge-green">\u23F1\uFE0F ${ssrInterpolate(unref(currentScene).timeSaved)}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><section class="section-darker py-20"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-black mb-4">\u9069\u5408\u4F60\u55CE\uFF1F \u{1F464}</h2><p class="text-[#94A3B8]">\u5982\u679C\u4F60\u6709\u985E\u4F3C\u5605\u554F\u984C\uFF0CPersonAI \u5E6B\u5230\u4F60</p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(personas, (p) => {
        _push(`<div class="feature-card"><div class="flex items-start gap-4 mb-4"><div class="text-4xl flex-shrink-0">${ssrInterpolate(p.emoji)}</div><div><h3 class="font-bold text-white text-sm">${ssrInterpolate(p.name)}</h3><p class="text-[#94A3B8] text-xs">${ssrInterpolate(p.role)}</p></div></div><div class="bg-[#0F172A] rounded-lg p-3 mb-3"><div class="text-red-400 text-xs font-bold mb-1">\u{1F623} \u75DB\u9EDE</div><p class="text-[#94A3B8] text-xs leading-relaxed">${ssrInterpolate(p.pain)}</p></div><div class="bg-[#0F172A] rounded-lg p-3"><div class="text-green-400 text-xs font-bold mb-1">\u2705 PersonAI</div><p class="text-[#94A3B8] text-xs leading-relaxed">${ssrInterpolate(p.solution)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #1E3A5F 0%, #0F172A 100%)" })}"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-black mb-4 text-white">\u4F60\u7684\u696D\u52D9\u8CC7\u6599\uFF0C\u53EA\u5C6C\u65BC\u4F60 \u{1F512}</h2><p class="text-blue-200 text-lg">SME \u6700\u64D4\u5FC3\u7684 4 \u500B\u554F\u984C\uFF0CPersonAI \u4E00\u4E00\u56DE\u61C9</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"><!--[-->`);
      ssrRenderList(securityPromises, (p) => {
        _push(`<div class="security-card"><div class="text-3xl mb-4">${ssrInterpolate(p.emoji)}</div><h3 class="font-bold text-white text-lg mb-3">${ssrInterpolate(p.title)}</h3><p class="text-[#94A3B8] text-sm leading-relaxed">${ssrInterpolate(p.desc)}</p></div>`);
      });
      _push(`<!--]--></div><div class="text-center mb-8"><div class="inline-flex flex-wrap gap-3 justify-center"><!--[-->`);
      ssrRenderList(certifications, (cert) => {
        _push(`<span class="cert-badge">${ssrInterpolate(cert)}</span>`);
      });
      _push(`<!--]--></div></div><div class="text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/security",
        class: "btn-secondary border-blue-500 text-blue-400 hover:bg-blue-500/10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u{1F4D6} \u4E86\u89E3\u66F4\u591A\u5B89\u5168\u627F\u8AFE \u2192`);
          } else {
            return [
              createTextVNode("\u{1F4D6} \u4E86\u89E3\u66F4\u591A\u5B89\u5168\u627F\u8AFE \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="section-darker py-20"><div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div><span class="badge mb-4">\u{1F393} AI \u6559\u7DF4\u670D\u52D9</span><h2 class="text-3xl md:text-4xl font-black mb-4 text-white">\u5514\u8B58\u7528\uFF1F\u6709\u4EBA\u6559\uFF01</h2><p class="text-[#94A3B8] text-lg mb-6 leading-relaxed">\u771F\u4EBA\u6280\u8853\u5718\u968A\uFF0CWhatsApp \u5EE3\u6771\u8A71\u5168\u7A0B\u652F\u63F4\u3002\u5514\u4FC2\u51B7\u51B0\u51B0\u5605 Chatbot\uFF0C\u4FC2\u771F\u4FC2\u5E6B\u5230\u4F60\u5605 AI \u6559\u7DF4\u3002</p><ul class="space-y-3 mb-8"><!--[-->`);
      ssrRenderList(coachItems, (item) => {
        _push(`<li class="flex items-center gap-3 text-[#E2E8F0] text-sm"><span class="text-green-400 font-bold">\u2713</span> ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul><div class="text-2xl font-black mb-2 gradient-text">HK$1,500/\u6708</div><p class="text-[#64748B] text-sm mb-6">\u6708\u4ED8\uFF0C\u96A8\u6642\u53D6\u6D88 \xB7 \u53EF\u8207\u4EFB\u4F55\u65B9\u6848\u914D\u5408</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ai-coach",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u4E86\u89E3 AI \u6559\u7DF4\u670D\u52D9 \u2192`);
          } else {
            return [
              createTextVNode("\u4E86\u89E3 AI \u6559\u7DF4\u670D\u52D9 \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="text-center"><div class="glass-card p-8 inline-block"><div class="text-6xl mb-4">\u{1F393}</div><h3 class="text-xl font-bold text-white mb-2">\u771F\u4EBA WhatsApp \u652F\u63F4</h3><p class="text-[#94A3B8] text-sm">\u5514\u4FC2 AI Chatbot\uFF0C\u4FC2\u771F\u4FC2\u5E6B\u5230\u4F60\u5605\u6559\u7DF4</p><div class="mt-6 text-sm text-[#64748B]">\u9069\u5408\uFF1A\u5514\u60F3\u81EA\u5DF1\u6478\u7D22\uFF0C\u60F3\u5FEB\u901F\u4E0A\u624B\u5605\u7528\u6236</div></div></div></div></div></section><section class="section-blue py-20"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-black mb-4">\u63C0\u5571\u4F60\u5605\u65B9\u6848 \u{1F4B0}</h2><p class="text-[#94A3B8]">\u6240\u6709\u65B9\u6848\u5305\u542B 60+ \u6280\u80FD + \u5EE3\u6771\u8A71\u512A\u5316 + \u6C38\u4E45\u8A18\u61B6</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"><!--[-->`);
      ssrRenderList(pricingPlans, (plan) => {
        _push(`<div class="${ssrRenderClass([{ featured: plan.featured }, "pricing-card"])}"><div class="text-center mb-6"><div class="text-sm font-bold text-[#94A3B8] mb-1">${ssrInterpolate(plan.target)}</div><div class="${ssrRenderClass([plan.featured ? "gradient-text" : "text-white", "text-3xl font-black mb-1"])}">${ssrInterpolate(plan.name)}</div><div class="text-3xl font-black text-[#F97316]">${ssrInterpolate(plan.price)}</div><div class="text-[#64748B] text-sm">${ssrInterpolate(plan.period)}</div></div><ul class="space-y-2 mb-6"><!--[-->`);
        ssrRenderList(plan.features, (feat) => {
          _push(`<li class="flex items-center gap-2 text-[#94A3B8] text-sm"><span class="text-green-400 text-xs">\u2713</span> ${ssrInterpolate(feat)}</li>`);
        });
        _push(`<!--]--></ul>`);
        if (plan.id !== "enterprise") {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/early-access",
            class: ["block w-full text-center py-3 rounded-xl font-bold text-sm transition-all", plan.featured ? "btn-primary" : "btn-secondary"]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u{1F680} \u958B\u59CB 14 \u65E5\u514D\u8CBB\u8A66\u7528 `);
              } else {
                return [
                  createTextVNode(" \u{1F680} \u958B\u59CB 14 \u65E5\u514D\u8CBB\u8A66\u7528 ")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<a href="https://wa.me/85296456787?text=\u4F60\u597D\uFF0C\u6211\u60F3\u67E5\u8A62 Enterprise \u65B9\u6848" target="_blank" class="block w-full text-center py-3 rounded-xl font-bold text-sm border border-[#334155] text-[#94A3B8] hover:border-[#3B82F6] transition-all"> \u{1F4F1} WhatsApp \u67E5\u8A62 </a>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pricing",
        class: "btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u7747\u5B8C\u6574\u6BD4\u8F03\u8868 \u2192`);
          } else {
            return [
              createTextVNode("\u7747\u5B8C\u6574\u6BD4\u8F03\u8868 \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="section-darker py-20"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-10"><h2 class="text-3xl md:text-4xl font-black mb-4">\u5E38\u898B\u554F\u984C \u2753</h2></div><div class="space-y-3"><!--[-->`);
      ssrRenderList(faqs, (faq, idx) => {
        _push(`<div class="faq-item"><div class="faq-question"><span>${ssrInterpolate(faq.q)}</span><svg class="${ssrRenderClass([{ "rotate-180": unref(openFaq) === idx }, "w-5 h-5 flex-shrink-0 transition-transform"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div><div class="${ssrRenderClass([{ open: unref(openFaq) === idx }, "faq-answer"])}">${ssrInterpolate(faq.a)}</div></div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/faq",
        class: "btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u67E5\u770B\u5168\u90E8 FAQ \u2192`);
          } else {
            return [
              createTextVNode("\u67E5\u770B\u5168\u90E8 FAQ \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="section-hero py-20"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 class="text-3xl md:text-5xl font-black mb-6 text-white"> 14 \u65E5\u514D\u8CBB\u8A66\u7528<br><span class="gradient-text">\u5514\u9700\u8981\u4FE1\u7528\u5361</span></h2><p class="text-xl text-[#94A3B8] mb-8">\u8A66\u7528\u671F\u5167\u53EF\u4EE5\u96A8\u6642\u53D6\u6D88\uFF0C\u5514\u6703\u81EA\u52D5\u6263\u8CBB</p><div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/early-access",
        class: "btn-primary text-lg px-10 py-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u{1F680} \u7ACB\u5373\u958B\u59CB\u514D\u8CBB\u8A66\u7528`);
          } else {
            return [
              createTextVNode("\u{1F680} \u7ACB\u5373\u958B\u59CB\u514D\u8CBB\u8A66\u7528")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://wa.me/85296456787?text=\u4F60\u597D\uFF0C\u6211\u60F3\u4E86\u89E3 PersonAI" target="_blank" class="btn-whatsapp text-lg px-10 py-4">\u{1F4AC} WhatsApp \u67E5\u8A62</a></div><p class="text-[#64748B] text-sm">\u6709\u554F\u984C\uFF1F\u76F4\u63A5 WhatsApp \u806F\u7D61\u6211\u54CB \u{1F4F1} +852 9645 6787</p></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CJRNQ53E.mjs.map
