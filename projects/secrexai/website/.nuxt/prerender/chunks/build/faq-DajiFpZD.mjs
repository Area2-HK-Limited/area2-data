import { H as Head } from './components-7B7l7irn.mjs';
import { defineComponent, ref, withCtx, createVNode, useSSRContext } from 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/vue/server-renderer/index.mjs';
import './server.mjs';
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
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    const openItems = ref(/* @__PURE__ */ new Set());
    const isOpen = (ci, fi) => openItems.value.has(`${ci}-${fi}`);
    const faqCategories = [
      {
        emoji: "\u{1F530}",
        title: "\u57FA\u672C\u554F\u984C",
        faqs: [
          { q: "PersonAI \u4FC2\u54A9\uFF1F\u540C ChatGPT \u6709\u54A9\u5206\u5225\uFF1F", a: "PersonAI \u4FC2\u4F4F\u55BA\u4F60 WhatsApp \u7684 AI \u52A9\u624B\uFF0C\u7121\u9700\u5B89\u88DD\u4EFB\u4F55 App\uFF0C\u5EE3\u6771\u8A71\u539F\u751F\uFF0C\u6709\u6C38\u4E45\u8A18\u61B6\uFF0C\u6578\u64DA\u5B58\u4E9E\u592A\u5340\uFF08\u65E5\u672C\uFF09\u3002\u76F8\u6BD4 ChatGPT\uFF1A\u9999\u6E2F\u76F4\u63A5\u53EF\u7528\uFF08\u5514\u9700\u8981 VPN\uFF09\u3001\u6C38\u9060\u8A18\u5F97\u4F60\u4FC2\u8AB0\u3001\u652F\u63F4\u66F4\u8C50\u5BCC\u7684 60+ \u6280\u80FD\u3001\u6709\u771F\u4EBA\u5EE3\u6771\u8A71\u6280\u8853\u652F\u63F4\u3002" },
          { q: "\u9EDE\u6A23\u958B\u59CB\u4F7F\u7528\uFF1F\u8981\u5B89\u88DD\u4E5C\u5622 App \u55CE\uFF1F", a: "\u5514\u9700\u8981\u5B89\u88DD\u4EFB\u4F55 App\uFF01\u4F60\u53EA\u9700\u8981 WhatsApp\uFF08\u4F60\u672C\u8EAB\u5DF2\u7D93\u6709\uFF09\uFF0C\u52A0 PersonAI \u70BA\u806F\u7D61\u4EBA\uFF0C\u76F4\u63A5\u767C\u8A0A\u606F\u5373\u53EF\u4F7F\u7528\u3002\u96F6\u5B78\u7FD2\u6210\u672C\uFF0C\u4E0A\u624B\u6642\u9593 < 5 \u5206\u9418\u3002" },
          { q: "\u652F\u5514\u652F\u63F4\u5EE3\u6771\u8A71\uFF1F", a: "\u5B8C\u5168\u652F\u63F4\u5EE3\u6771\u8A71\uFF0C\u800C\u4E14\u4FC2\u539F\u751F\u512A\u5316\u3002PersonAI \u7406\u89E3\u9999\u6E2F\u53E3\u8A9E\u3001\u4FDA\u8A9E\u3001Cantonese romanization\uFF0C\u56DE\u8986\u4EA6\u53EF\u4EE5\u7528\u5EE3\u6771\u8A71\u3002\u7576\u7136\u4EA6\u652F\u63F4\u666E\u901A\u8A71\u540C\u82F1\u6587\u3002" },
          { q: "\u53EF\u4EE5\u52A0\u5165 WhatsApp \u7FA4\u7D44\u55CE\uFF1F", a: "\u53EF\u4EE5\uFF01Business \u548C Enterprise \u65B9\u6848\u652F\u63F4\u5C07 PersonAI \u52A0\u5165 WhatsApp \u7FA4\u7D44\uFF0C\u6210\u70BA\u5718\u968A\u5171\u7528\u7684 AI \u52A9\u624B\uFF0C\u5354\u52A9\u6574\u7406\u7FA4\u7D44\u8CC7\u8A0A\u3001\u8A18\u9304\u6C7A\u5B9A\u7B49\u3002" }
        ]
      },
      {
        emoji: "\u{1F4B3}",
        title: "\u5B9A\u50F9\u76F8\u95DC",
        faqs: [
          { q: "\u6709\u5187\u514D\u8CBB\u8A66\u7528\uFF1F", a: "\u6709\uFF01\u6240\u6709\u65B9\u6848\u63D0\u4F9B 14 \u65E5\u514D\u8CBB\u8A66\u7528\uFF0C\u7121\u9700\u4FE1\u7528\u5361\uFF0C\u8A66\u7528\u671F\u9593\u9AD4\u9A57\u5168\u90E8\u529F\u80FD\uFF0C\u8A66\u7528\u5F8C\u5148\u6C7A\u5B9A\u662F\u5426\u7E7C\u7E8C\u3002" },
          { q: "\u53EF\u4EE5\u96A8\u6642\u53D6\u6D88\u55CE\uFF1F", a: "\u53EF\u4EE5\uFF01\u6240\u6709\u65B9\u6848\u6708\u4ED8\uFF0C\u96A8\u6642\u53EF\u4EE5\u53D6\u6D88\uFF0C\u7121\u9055\u7D04\u91D1\uFF0C\u7121\u4EFB\u4F55\u984D\u5916\u8CBB\u7528\u3002\u53D6\u6D88\u5F8C\u5E33\u865F\u6703\u5728\u7576\u6708\u7D50\u675F\u5F8C\u505C\u6B62\u670D\u52D9\u3002" },
          { q: "\u8D85\u51FA\u7528\u91CF\u9EDE\u7B97\uFF1F", a: "Starter \u548C Business \u65B9\u6848\u6709\u6BCF\u6708\u8A0A\u606F\u9650\u984D\u3002\u8D85\u51FA\u9650\u984D\u524D\uFF0C\u6211\u54CB\u6703\u63D0\u524D\u767C WhatsApp \u901A\u77E5\u4F60\uFF0C\u53EF\u4EE5\u9078\u64C7\u5347\u7D1A\u65B9\u6848\u6216\u6309\u91CF\u8A08\u8CBB\uFF0C\u7D55\u4E0D\u6703\u7A81\u7136\u505C\u670D\u52D9\u3002" },
          { q: "\u53EF\u4EE5\u5148\u8A66\u5F8C\u4ED8\u55CE\uFF1F", a: "\u7576\u7136\u53EF\u4EE5\uFF0114 \u65E5\u8A66\u7528\u671F\u5B8C\u5168\u514D\u8CBB\uFF0C\u4E0D\u9700\u8981\u4EFB\u4F55\u4ED8\u6B3E\u8CC7\u6599\uFF0C\u8A66\u7528\u5F8C\u5148\u6C7A\u5B9A\u662F\u5426\u7E7C\u7E8C\u3002" }
        ]
      },
      {
        emoji: "\u{1F512}",
        title: "\u8CC7\u8A0A\u5B89\u5168",
        faqs: [
          { q: "\u6211\u7684\u5C0D\u8A71\u6578\u64DA\u6703\u5514\u6703\u53BB\u5497\u7F8E\u570B\uFF1F", a: "\u5514\u6703\uFF01PersonAI \u7528\u6236\u5C0D\u8A71\u8A18\u9304\u5132\u5B58\u65BC Tencent Cloud \u65E5\u672C\uFF08\u4E9E\u592A\u5340\uFF09\u6578\u64DA\u4E2D\u5FC3\uFF0C\u5514\u6703\u50B3\u9001\u5230\u7F8E\u570B\uFF0C\u4E0D\u53D7\u7F8E\u570B CLOUD Act \u7BA1\u8F44\u3002" },
          { q: "PersonAI \u6703\u5514\u6703\u7528\u6211\u7684\u8CC7\u6599\u8A13\u7DF4 AI\uFF1F", a: "\u7D55\u5C0D\u5514\u6703\uFF01PersonAI \u7684\u627F\u8AFE\u4FC2\uFF1A\u4F60\u7684\u696D\u52D9\u8CC7\u6599\u53EA\u5C6C\u65BC\u4F60\uFF0C\u7D55\u4E0D\u7528\u65BC\u4EFB\u4F55 AI \u6A21\u578B\u8A13\u7DF4\uFF0C\u4EA6\u4E0D\u505A\u5EE3\u544A\u5B9A\u5411\u5206\u6790\u3002" },
          { q: "\u4FC2\u54AA PDPO \u5408\u898F\uFF1F", a: "PersonAI \u7531\u9999\u6E2F\u516C\u53F8\uFF08Hostlink \xD7 Area2\uFF09\u904B\u71DF\uFF0C\u5B8C\u5168\u7B26\u5408\u300A\u500B\u4EBA\u8CC7\u6599\uFF08\u79C1\u96B1\uFF09\u689D\u4F8B\u300B\uFF08PDPO\uFF09\u8981\u6C42\u3002Enterprise \u65B9\u6848\u53EF\u63D0\u4F9B DPA\uFF08\u6578\u64DA\u8655\u7406\u5354\u8B70\uFF09\u3002" },
          { q: "\u54E1\u5DE5\u7528\u540C\u4E00\u500B\u5E33\u865F\uFF0C\u5C0D\u8A71\u6703\u4E92\u76F8\u770B\u5230\u55CE\uFF1F", a: "\u5514\u6703\uFF01Business \u65B9\u6848\u63D0\u4F9B\u7368\u7ACB\u5E33\u865F\uFF0C\u6BCF\u500B\u5E33\u865F\u6709\u5B8C\u5168\u9694\u96E2\u7684\u8A18\u61B6\u540C\u5C0D\u8A71\u8A18\u9304\u3002\u54E1\u5DE5\u4E4B\u9593\u7684\u5C0D\u8A71\u4E92\u76F8\u770B\u4E0D\u5230\uFF0C\u4FDD\u8B77\u500B\u4EBA\u79C1\u96B1\u3002" }
        ]
      },
      {
        emoji: "\u2699\uFE0F",
        title: "\u6280\u8853\u554F\u984C",
        faqs: [
          { q: "\u9700\u8981\u5B89\u88DD\u4EFB\u4F55\u8EDF\u4EF6\u55CE\uFF1F", a: "\u5514\u9700\u8981\uFF01PersonAI \u5B8C\u5168\u901A\u904E WhatsApp \u904B\u4F5C\uFF0C\u7121\u9700\u4EFB\u4F55\u5B89\u88DD\u6216\u914D\u7F6E\u3002\u4F60\u53EA\u9700\u8981\u4E00\u90E8\u88DD\u4E86 WhatsApp \u7684\u624B\u6A5F\u6216\u96FB\u8166\u3002" },
          { q: "\u652F\u5514\u652F\u63F4 Telegram\uFF1F", a: "\u76EE\u524D PersonAI \u4E3B\u8981\u901A\u904E WhatsApp \u63D0\u4F9B\u670D\u52D9\u3002Telegram \u7248\u672C\u6B63\u5728\u898F\u5283\u4E2D\uFF0C\u5982\u679C\u4F60\u6709\u8208\u8DA3\uFF0C\u53EF\u4EE5 WhatsApp \u544A\u8A34\u6211\u54CB\uFF0C\u6703\u512A\u5148\u901A\u77E5\u4F60\u3002" },
          { q: "60+ \u6280\u80FD\u5305\u62EC\u5572\u54A9\uFF1F", a: "PersonAI \u6280\u80FD\u6DB5\u84CB\uFF1A\u5167\u5BB9\u5275\u4F5C\uFF08\u6587\u6848/\u5831\u544A/Email\uFF09\u3001\u8CC7\u6599\u641C\u5C0B\u8207\u6574\u7406\u3001\u7FFB\u8B6F\uFF08\u4E2D\u82F1\uFF09\u3001\u6392\u7A0B\u63D0\u9192\u7BA1\u7406\u3001\u5E02\u5834\u5206\u6790\u3001\u5716\u7247\u751F\u6210\u3001\u6578\u64DA\u5831\u8868\u3001\u7AF6\u54C1\u7814\u7A76\u3001\u5BA2\u6236\u6E9D\u901A\u7BC4\u672C\u7B49\u3002\u8A73\u7D30\u6280\u80FD\u6E05\u55AE\u53EF WhatsApp \u67E5\u8A62\u3002" }
        ]
      },
      {
        emoji: "\u{1F3E2}",
        title: "\u4F01\u696D\u61C9\u7528",
        faqs: [
          { q: "\u9069\u5408\u5E7E\u591A\u4EBA\u7684\u516C\u53F8\uFF1F", a: "PersonAI \u9069\u5408 1 \u4EBA SOHO \u5230\u6578\u5341\u4EBA\u4E2D\u5C0F\u4F01\u3002Starter \u9069\u5408\u500B\u4EBA\uFF0CBusiness \u9069\u5408 5 \u4EBA\u4EE5\u4E0B\u5718\u968A\uFF0CEnterprise \u9069\u5408\u66F4\u5927\u898F\u6A21\u4F01\u696D\uFF0C\u53EF\u6309\u9700\u5B9A\u5236\u5E33\u865F\u6578\u91CF\u548C\u529F\u80FD\u3002" },
          { q: "\u53EF\u4EE5\u8A02\u88FD\u884C\u696D\u5C08\u5C6C\u529F\u80FD\u55CE\uFF1F", a: "\u53EF\u4EE5\uFF01Enterprise \u65B9\u6848\u652F\u63F4\u81EA\u8A02 AI \u500B\u6027\u3001\u884C\u696D\u77E5\u8B58\u5EAB\u3001\u8207\u73FE\u6709\u7CFB\u7D71 API \u6574\u5408\u3002\u8ACB WhatsApp \u6211\u54CB\u8A73\u8AC7\u4F60\u7684\u9700\u6C42\u3002" },
          { q: "\u6709\u5187\u8A66\u7528\u7248\u4FFE\u6211\u5148\u6E2C\u8A66\u6548\u679C\uFF1F", a: "\u6709\uFF0114 \u65E5\u514D\u8CBB\u8A66\u7528\uFF0C\u53EF\u4EE5\u5145\u5206\u6E2C\u8A66 PersonAI \u5728\u4F60\u5177\u9AD4\u696D\u52D9\u5834\u666F\u4E2D\u7684\u6548\u679C\uFF0C\u7136\u5F8C\u518D\u6C7A\u5B9A\u662F\u5426\u4ED8\u8CBB\u3002" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>\u5E38\u898B\u554F\u984C FAQ | PersonAI \u2014 \u9999\u6E2F WhatsApp AI \u52A9\u624B</title><meta name="description" content="PersonAI \u5E38\u898B\u554F\u984C\u89E3\u7B54\u3002\u4E86\u89E3\u529F\u80FD\u3001\u5B9A\u50F9\u3001\u5B89\u5168\u3001\u6280\u8853\u652F\u63F4\u7B49\u6240\u6709\u4F60\u60F3\u77E5\u9053\u7684\u7B54\u6848\u3002"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "\u5E38\u898B\u554F\u984C FAQ | PersonAI \u2014 \u9999\u6E2F WhatsApp AI \u52A9\u624B"),
              createVNode("meta", {
                name: "description",
                content: "PersonAI \u5E38\u898B\u554F\u984C\u89E3\u7B54\u3002\u4E86\u89E3\u529F\u80FD\u3001\u5B9A\u50F9\u3001\u5B89\u5168\u3001\u6280\u8853\u652F\u63F4\u7B49\u6240\u6709\u4F60\u60F3\u77E5\u9053\u7684\u7B54\u6848\u3002"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="bg-gradient-to-br from-blue-50 to-white py-16"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h1 class="text-4xl font-black text-gray-900 mb-4">\u5E38\u898B\u554F\u984C</h1><p class="text-gray-500 text-lg">\u627E\u5514\u5230\u7B54\u6848\uFF1F<a href="https://wa.me/85296456787" target="_blank" class="text-blue-600 hover:underline">WhatsApp \u76F4\u63A5\u554F\u6211\u54CB</a></p></div><!--[-->`);
      ssrRenderList(faqCategories, (category, ci) => {
        _push(`<div class="mb-10"><h2 class="text-xl font-black text-gray-900 mb-4 flex items-center gap-2"><span>${ssrInterpolate(category.emoji)}</span>${ssrInterpolate(category.title)}</h2><div class="space-y-3"><!--[-->`);
        ssrRenderList(category.faqs, (faq, fi) => {
          _push(`<div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"><button class="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"><span class="font-semibold text-gray-900 text-sm">${ssrInterpolate(faq.q)}</span><span class="text-gray-400 flex-shrink-0 text-xs">${ssrInterpolate(isOpen(ci, fi) ? "\u25B2" : "\u25BC")}</span></button>`);
          if (isOpen(ci, fi)) {
            _push(`<div class="px-6 pb-4 text-gray-600 text-sm leading-relaxed">${ssrInterpolate(faq.a)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--><div class="text-center bg-blue-600 rounded-2xl p-8 text-white"><h3 class="font-black text-xl mb-3">\u4ECD\u7136\u6709\u7591\u554F\uFF1F</h3><p class="text-blue-200 mb-6">\u6211\u54CB\u96A8\u6642\u4EE5 WhatsApp \u5EE3\u6771\u8A71\u56DE\u7B54\u4F60\u7684\u554F\u984C</p><a href="https://wa.me/85296456787?text=\u4F60\u597D\uFF01\u6211\u6709\u95DC\u65BC PersonAI \u7684\u554F\u984C\u60F3\u67E5\u8A62" target="_blank" class="inline-flex items-center gap-2 bg-green-400 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-500 transition-colors"> \u{1F4AC} WhatsApp \u5373\u6642\u54A8\u8A62 </a></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=faq-DajiFpZD.mjs.map
