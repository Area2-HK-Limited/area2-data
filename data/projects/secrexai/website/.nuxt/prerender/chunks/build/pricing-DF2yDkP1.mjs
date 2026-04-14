import { H as Head } from './components-7B7l7irn.mjs';
import { a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/vue/server-renderer/index.mjs';
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
  __name: "pricing",
  __ssrInlineRender: true,
  setup(__props) {
    const activeFaq = ref(null);
    const plans = [
      {
        id: "starter",
        name: "Starter",
        target: "\u500B\u4EBA / SOHO",
        price: "HK$298",
        period: "/\u6708",
        note: "\u5E74\u4ED8 HK$2,980\uFF08\u7701 HK$576\uFF09",
        featured: false,
        cta: "14\u65E5\u514D\u8CBB\u8A66\u7528",
        features: ["1 \u500B WhatsApp \u5E33\u865F", "60+ AI \u6280\u80FD\u5168\u5305", "\u5EE3\u6771\u8A71\u539F\u751F\u512A\u5316", "\u6C38\u4E45\u8A18\u61B6\u529F\u80FD", "\u4E9E\u592A\u5340\u6578\u64DA\u5132\u5B58\uFF08\u65E5\u672C\uFF09", "PDPO \u5408\u898F", "\u96FB\u90F5\u6280\u8853\u652F\u63F4"]
      },
      {
        id: "business",
        name: "Business",
        target: "SME \u9996\u9078",
        price: "HK$680",
        period: "/\u6708",
        note: "\u5E74\u4ED8 HK$6,800\uFF08\u7701 HK$1,360\uFF09",
        featured: true,
        cta: "\u7ACB\u5373\u514D\u8CBB\u8A66\u7528",
        features: ["\u6700\u591A 5 \u500B WhatsApp \u5E33\u865F", "60+ AI \u6280\u80FD\u5168\u5305", "\u5EE3\u6771\u8A71\u539F\u751F\u512A\u5316", "\u6C38\u4E45\u8A18\u61B6\u529F\u80FD", "\u4E9E\u592A\u5340\u6578\u64DA\u5132\u5B58\uFF08\u65E5\u672C\uFF09", "PDPO \u5408\u898F", "\u512A\u5148 WhatsApp \u6280\u8853\u652F\u63F4", "\u6708\u5EA6\u4F7F\u7528\u5206\u6790\u5831\u544A", "\u884C\u696D\u5C08\u5C6C\u6280\u80FD\u8A2D\u5B9A"]
      },
      {
        id: "enterprise",
        name: "Enterprise",
        target: "\u5927\u578B\u4F01\u696D / \u6A5F\u69CB",
        price: "\u6309\u9700\u5B9A\u5236",
        period: "",
        note: "",
        featured: false,
        cta: "WhatsApp \u67E5\u8A62\u5831\u50F9",
        features: ["\u7121\u9650 WhatsApp \u5E33\u865F", "\u81EA\u8A02 AI \u500B\u6027 + \u884C\u696D\u77E5\u8B58\u5EAB", "\u8207\u73FE\u6709\u7CFB\u7D71 API \u6574\u5408", "\u5C08\u5C6C\u5BA2\u6236\u6210\u529F\u7D93\u7406", "SLA \u670D\u52D9\u4FDD\u969C\u5354\u8B70", "\u53EF\u7C3D\u7F72 DPA \u6578\u64DA\u5354\u8B70", "SOC 2 / ISO 27001 \u5408\u898F\u6587\u4EF6"]
      }
    ];
    const currentTools = [
      { name: "ChatGPT Plus", price: "HK$160/\u6708" },
      { name: "Claude Pro", price: "HK$160/\u6708" },
      { name: "Grammarly Business", price: "HK$208/\u6708" },
      { name: "Canva Pro", price: "HK$380/\u6708" },
      { name: "Notion AI", price: "HK$160/\u6708" },
      { name: "Zapier Starter", price: "HK$360/\u6708" },
      { name: "Buffer Essentials", price: "HK$600/\u6708" }
    ];
    const comparisonRows = [
      { feature: "WhatsApp \u5E33\u865F\u6578\u91CF", starter: "1 \u500B", business: "\u6700\u591A 5 \u500B", enterprise: "\u7121\u9650" },
      { feature: "60+ AI \u6280\u80FD", starter: true, business: true, enterprise: true },
      { feature: "\u5EE3\u6771\u8A71\u512A\u5316", starter: true, business: true, enterprise: true },
      { feature: "\u6C38\u4E45\u8A18\u61B6", starter: true, business: true, enterprise: true },
      { feature: "\u6578\u64DA\u4E9E\u592A\u5340\u5132\u5B58\uFF08\u65E5\u672C\uFF09", starter: true, business: true, enterprise: true },
      { feature: "PDPO \u5408\u898F", starter: true, business: true, enterprise: true },
      { feature: "\u512A\u5148\u6280\u8853\u652F\u63F4", starter: false, business: true, enterprise: true },
      { feature: "\u6708\u5EA6\u4F7F\u7528\u5831\u544A", starter: false, business: true, enterprise: true },
      { feature: "\u81EA\u8A02 AI \u500B\u6027", starter: false, business: false, enterprise: true },
      { feature: "API \u6574\u5408", starter: false, business: false, enterprise: true },
      { feature: "\u53EF\u7C3D DPA", starter: false, business: false, enterprise: true },
      { feature: "SLA \u4FDD\u969C", starter: false, business: false, enterprise: true },
      { feature: "AI \u6559\u7DF4\uFF08\u589E\u503C\uFF09", starter: "\u53EF\u52A0\u8CFC", business: "\u53EF\u52A0\u8CFC", enterprise: "\u53EF\u52A0\u8CFC" }
    ];
    const pricingFaqs = [
      { q: "\u53EF\u4EE5\u96A8\u6642\u53D6\u6D88\u55CE\uFF1F", a: "\u53EF\u4EE5\uFF01\u6240\u6709\u65B9\u6848\u5747\u4FC2\u6708\u4ED8\uFF0C\u96A8\u6642\u53EF\u4EE5\u53D6\u6D88\uFF0C\u7121\u9055\u7D04\u91D1\uFF0C\u7121\u4EFB\u4F55\u984D\u5916\u8CBB\u7528\u3002" },
      { q: "\u6709\u5187\u514D\u8CBB\u8A66\u7528\uFF1F", a: "\u6709\uFF01\u6240\u6709\u65B9\u6848\u63D0\u4F9B 14 \u65E5\u514D\u8CBB\u8A66\u7528\uFF0C\u7121\u9700\u4FE1\u7528\u5361\uFF0C\u8A66\u7528\u671F\u9593\u9AD4\u9A57\u5168\u90E8\u529F\u80FD\u3002" },
      { q: "\u53EF\u4EE5\u5148\u8A66\u5F8C\u4ED8\u55CE\uFF1F", a: "\u7576\u7136\u53EF\u4EE5\uFF0114 \u65E5\u8A66\u7528\u671F\u5B8C\u5168\u514D\u8CBB\uFF0C\u8A66\u7528\u5F8C\u5148\u6C7A\u5B9A\u4FC2\u54AA\u7E7C\u7E8C\uFF0C\u975E\u5E38\u9748\u6D3B\u3002" },
      { q: "\u8D85\u51FA\u7528\u91CF\u9EDE\u7B97\uFF1F", a: "Starter \u548C Business \u65B9\u6848\u6709\u6BCF\u6708\u8A0A\u606F\u9650\u984D\u3002\u8D85\u51FA\u6642\u6211\u54CB\u6703\u63D0\u524D\u901A\u77E5\u4F60\uFF0C\u53EF\u4EE5\u9078\u64C7\u5347\u7D1A\u65B9\u6848\u6216\u6309\u91CF\u8A08\u8CBB\uFF0C\u7D55\u4E0D\u6703\u7A81\u7136\u505C\u670D\u52D9\u3002" },
      { q: "\u591A\u4EBA\u7528\u540C\u4E00\u5E33\u865F\u53EF\u4EE5\u55CE\uFF1F", a: "Business \u65B9\u6848\u652F\u63F4\u6700\u591A 5 \u500B\u7368\u7ACB\u5E33\u865F\uFF0C\u6BCF\u500B\u5E33\u865F\u6709\u7368\u7ACB\u8A18\u61B6\u540C\u8A2D\u5B9A\uFF0C\u54E1\u5DE5\u4E4B\u9593\u5C0D\u8A71\u5B8C\u5168\u9694\u96E2\uFF0C\u4FDD\u8B77\u5404\u4EBA\u79C1\u96B1\u3002" },
      { q: "\u53EF\u4EE5\u5E74\u4ED8\u4EAB\u6298\u6263\u55CE\uFF1F", a: "\u53EF\u4EE5\uFF01\u5E74\u4ED8\u4EAB\u6298\u6263\uFF1AStarter \u5E74\u4ED8 HK$2,980\uFF08\u7701 HK$576\uFF09\uFF0CBusiness \u5E74\u4ED8 HK$6,800\uFF08\u7701 HK$1,360\uFF09\u3002\u806F\u7D61\u6211\u54CB\u4E86\u89E3\u5E74\u4ED8\u8A73\u60C5\u3002" },
      { q: "\u4F01\u696D\u65B9\u6848\u5305\u542B\u54A9\u670D\u52D9\uFF1F", a: "Enterprise \u65B9\u6848\u5B8C\u5168\u6309\u9700\u5B9A\u5236\uFF0C\u5305\u62EC\u7121\u9650\u5E33\u865F\u3001\u81EA\u8A02 AI \u500B\u6027\u3001API \u6574\u5408\u3001\u5C08\u5C6C\u5BA2\u6236\u6210\u529F\u7D93\u7406\u3001SLA \u4FDD\u969C\u3001DPA \u7C3D\u7F72\u7B49\u3002\u8ACB WhatsApp \u6211\u54CB\u5831\u50F9\u3002" },
      { q: "AI \u6559\u7DF4\u4FC2\u54A9\uFF1F\u4FC2\u54AA\u5FC5\u8981\uFF1F", a: "AI \u6559\u7DF4\u4FC2\u53EF\u9078\u589E\u503C\u670D\u52D9\uFF08HK$1,500/\u6708\uFF09\uFF0C\u63D0\u4F9B\u771F\u4EBA WhatsApp \u5EE3\u6771\u8A71\u6280\u8853\u652F\u63F4\uFF0C\u5E6B\u4F60\u5FEB\u901F\u4E0A\u624B + \u6301\u7E8C\u512A\u5316\u3002\u5927\u90E8\u5206\u7528\u6236\u53EF\u81EA\u884C\u4E0A\u624B\uFF0C\u4F46\u5982\u679C\u60F3\u6700\u5FEB\u767C\u63EE\u6548\u76CA\uFF0CAI \u6559\u7DF4\u4FC2\u6700\u5FEB\u6377\u9014\u5F91\u3002" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>\u5B9A\u50F9\u65B9\u6848 | PersonAI \u2014 \u9999\u6E2F WhatsApp AI \u52A9\u624B</title><meta name="description" content="PersonAI \u900F\u660E\u5B9A\u50F9\u3002Starter HK$298/\u6708 \xB7 Business HK$680/\u6708 \xB7 Enterprise \u6309\u9700\u300214\u65E5\u514D\u8CBB\u8A66\u7528\uFF0C\u7121\u9700\u4FE1\u7528\u5361\u3002"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "\u5B9A\u50F9\u65B9\u6848 | PersonAI \u2014 \u9999\u6E2F WhatsApp AI \u52A9\u624B"),
              createVNode("meta", {
                name: "description",
                content: "PersonAI \u900F\u660E\u5B9A\u50F9\u3002Starter HK$298/\u6708 \xB7 Business HK$680/\u6708 \xB7 Enterprise \u6309\u9700\u300214\u65E5\u514D\u8CBB\u8A66\u7528\uFF0C\u7121\u9700\u4FE1\u7528\u5361\u3002"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="bg-gradient-to-br from-blue-50 to-white py-16"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">\u63C0\u5571\u4F60\u5605\u65B9\u6848\uFF0C\u5373\u65E5\u958B\u59CB</h1><p class="text-gray-500 text-xl mb-2">\u6240\u6709\u65B9\u6848\u5747\u5305\u542B 60+ \u6280\u80FD + \u5EE3\u6771\u8A71\u512A\u5316 + \u6C38\u4E45\u8A18\u61B6</p><p class="text-green-600 font-semibold">\u2713 14 \u65E5\u514D\u8CBB\u8A66\u7528 \xB7 \u7121\u9700\u4FE1\u7528\u5361 \xB7 \u96A8\u6642\u53D6\u6D88</p></div></section><section class="section-bg py-16"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"><!--[-->`);
      ssrRenderList(plans, (plan) => {
        _push(`<div class="${ssrRenderClass([
          "bg-white rounded-2xl p-8 border-2",
          plan.featured ? "border-blue-600 shadow-xl relative" : "border-gray-200 shadow-sm"
        ])}">`);
        if (plan.featured) {
          _push(`<div class="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap"><span class="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">\u2B50 SME \u9996\u9078</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="text-center mb-6"><h2 class="font-black text-2xl text-gray-900 mb-1">${ssrInterpolate(plan.name)}</h2><p class="text-gray-500 text-sm mb-4">${ssrInterpolate(plan.target)}</p><div class="text-5xl font-black text-orange-500 mb-1">${ssrInterpolate(plan.price)}</div><div class="text-gray-400 text-sm">${ssrInterpolate(plan.period)}</div>`);
        if (plan.note) {
          _push(`<p class="text-xs text-gray-400 mt-1">${ssrInterpolate(plan.note)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><ul class="space-y-3 mb-8"><!--[-->`);
        ssrRenderList(plan.features, (f) => {
          _push(`<li class="flex items-start gap-3"><span class="text-green-500 font-bold flex-shrink-0">\u2713</span><span class="text-gray-700 text-sm">${ssrInterpolate(f)}</span></li>`);
        });
        _push(`<!--]--></ul><a href="https://wa.me/85296456787" target="_blank" class="${ssrRenderClass([
          "block w-full text-center py-3 rounded-xl font-semibold transition-colors",
          plan.featured ? "bg-blue-600 text-white hover:bg-blue-700" : "border-2 border-gray-200 text-gray-700 hover:bg-gray-50"
        ])}">${ssrInterpolate(plan.cta)}</a></div>`);
      });
      _push(`<!--]--></div><div class="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 text-white mb-12"><div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"><div><div class="text-sm font-medium text-blue-200 mb-2">\u589E\u503C\u670D\u52D9</div><h3 class="text-2xl font-black mb-2">\u{1F393} AI \u6559\u7DF4</h3><p class="text-blue-100 text-sm leading-relaxed max-w-lg"> \u771F\u4EBA\u6280\u8853\u5718\u968A WhatsApp \u5EE3\u6771\u8A71\u5168\u7A0B\u652F\u63F4\u3002\u8ABF\u6559 AI \u500B\u6027\u3001\u5FEB\u901F\u4E0A\u624B\u3001\u6301\u7E8C\u512A\u5316\u2014\u2014\u78BA\u4FDD\u4F60\u7528\u76E1 PersonAI \u7684\u5168\u90E8\u529F\u80FD\u3002 </p></div><div class="text-center flex-shrink-0"><div class="text-4xl font-black mb-1">HK$1,500</div><div class="text-blue-200 text-sm mb-4">/\u6708 \xB7 \u53EF\u8207\u4EFB\u4F55\u65B9\u6848\u914D\u5408</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ai-coach",
        class: "inline-block bg-white text-blue-700 px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u4E86\u89E3 AI \u6559\u7DF4 \u2192 `);
          } else {
            return [
              createTextVNode(" \u4E86\u89E3 AI \u6559\u7DF4 \u2192 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12"><h3 class="text-2xl font-black text-gray-900 mb-6 text-center">\u{1F4B0} ROI \u8A08\u7B97\uFF1A\u4E00\u500B\u65B9\u6848\u503C\u5E7E\u591A\uFF1F</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h4 class="font-bold text-red-600 mb-4">\u274C \u4F60\u73FE\u5728\u6BCF\u6708\u8A02\u95B1\u8CBB</h4><div class="space-y-2"><!--[-->`);
      ssrRenderList(currentTools, (tool) => {
        _push(`<div class="flex justify-between text-sm"><span class="text-gray-700">${ssrInterpolate(tool.name)}</span><span class="font-medium text-gray-900">${ssrInterpolate(tool.price)}</span></div>`);
      });
      _push(`<!--]--><div class="border-t border-gray-200 pt-2 flex justify-between font-bold"><span>\u6BCF\u6708\u5408\u8A08</span><span class="text-red-500">HK$2,028</span></div></div></div><div><h4 class="font-bold text-green-600 mb-4">\u2705 PersonAI Business \u65B9\u6848</h4><div class="space-y-2"><div class="flex justify-between text-sm"><span class="text-gray-700">PersonAI Business</span><span class="font-medium text-gray-900">HK$680/\u6708</span></div><div class="flex justify-between text-sm"><span class="text-gray-700">\u6DB5\u84CB\u6240\u6709\u529F\u80FD</span><span class="font-medium text-green-600">\u2713 \u5168\u5305</span></div><div class="border-t border-gray-200 pt-2 flex justify-between font-bold"><span>\u6BCF\u6708\u7BC0\u7701</span><span class="text-green-500">HK$1,348</span></div></div><div class="bg-green-50 rounded-xl p-4 mt-4"><p class="text-green-700 font-bold text-lg">\u5E74\u7701 <span class="text-2xl">HK$16,176</span> \u{1F389}</p><p class="text-green-600 text-sm">\u300C\u4E00\u5F35\u55AE\u5C31\u56DE\u672C\u300D\u2014 \u4E00\u500B\u65B0\u5BA2\u6236\u8DB3\u4EE5\u8986\u84CB\u5168\u5E74\u8CBB\u7528</p></div></div></div></div><div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12"><div class="p-6 border-b border-gray-100"><h3 class="text-2xl font-black text-gray-900">\u65B9\u6848\u8A73\u7D30\u6BD4\u8F03</h3></div><div class="overflow-x-auto"><table class="w-full"><thead><tr class="bg-gray-50"><th class="text-left px-6 py-4 font-semibold text-gray-700">\u529F\u80FD</th><th class="text-center px-4 py-4 font-semibold text-gray-700">Starter</th><th class="text-center px-4 py-4 font-semibold text-blue-700 bg-blue-50">Business</th><th class="text-center px-4 py-4 font-semibold text-gray-700">Enterprise</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(comparisonRows, (row, i) => {
        _push(`<tr class="${ssrRenderClass(i % 2 === 0 ? "bg-white" : "bg-gray-50/50")}"><td class="px-6 py-3 text-sm text-gray-700 font-medium">${ssrInterpolate(row.feature)}</td><td class="text-center px-4 py-3 text-sm">`);
        if (row.starter === true) {
          _push(`<span class="text-green-500">\u2713</span>`);
        } else if (row.starter === false) {
          _push(`<span class="text-gray-300">\u2013</span>`);
        } else {
          _push(`<span class="text-gray-700">${ssrInterpolate(row.starter)}</span>`);
        }
        _push(`</td><td class="text-center px-4 py-3 text-sm bg-blue-50/30">`);
        if (row.business === true) {
          _push(`<span class="text-green-500 font-bold">\u2713</span>`);
        } else if (row.business === false) {
          _push(`<span class="text-gray-300">\u2013</span>`);
        } else {
          _push(`<span class="text-gray-700 font-medium">${ssrInterpolate(row.business)}</span>`);
        }
        _push(`</td><td class="text-center px-4 py-3 text-sm">`);
        if (row.enterprise === true) {
          _push(`<span class="text-green-500">\u2713</span>`);
        } else if (row.enterprise === false) {
          _push(`<span class="text-gray-300">\u2013</span>`);
        } else {
          _push(`<span class="text-gray-700">${ssrInterpolate(row.enterprise)}</span>`);
        }
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div><div><h3 class="text-2xl font-black text-gray-900 mb-6">\u5B9A\u50F9\u5E38\u898B\u554F\u984C</h3><div class="space-y-3"><!--[-->`);
      ssrRenderList(pricingFaqs, (faq, i) => {
        _push(`<div class="bg-white rounded-xl border border-gray-100 shadow-sm"><button class="w-full px-6 py-4 text-left flex items-center justify-between"><span class="font-semibold text-gray-900">${ssrInterpolate(faq.q)}</span><span class="text-gray-400">${ssrInterpolate(unref(activeFaq) === i ? "\u25B2" : "\u25BC")}</span></button>`);
        if (unref(activeFaq) === i) {
          _push(`<div class="px-6 pb-4"><p class="text-gray-600 text-sm leading-relaxed">${ssrInterpolate(faq.a)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></section><section class="section-cta py-12"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 class="text-3xl font-black text-white mb-4">\u6E96\u5099\u597D\u958B\u59CB\u4E86\u55CE\uFF1F</h2><p class="text-blue-200 mb-8">14 \u65E5\u514D\u8CBB\u8A66\u7528\uFF0C\u611F\u53D7 PersonAI \u5605\u5A01\u529B</p><div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="https://wa.me/85296456787?text=\u4F60\u597D\uFF01\u6211\u60F3\u7533\u8ACB PersonAI \u514D\u8CBB\u8A66\u7528" target="_blank" class="inline-flex items-center justify-center gap-2 bg-green-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-500 transition-colors"> \u{1F4AC} WhatsApp \u958B\u59CB\u8A66\u7528 </a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/early-access",
        class: "inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u{1F525} \u512A\u5148\u767B\u8A18\u540D\u984D `);
          } else {
            return [
              createTextVNode(" \u{1F525} \u512A\u5148\u767B\u8A18\u540D\u984D ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=pricing-DF2yDkP1.mjs.map
