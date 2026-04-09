import { H as Head } from './components-7B7l7irn.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/vue/server-renderer/index.mjs';
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
  __name: "security",
  __ssrInlineRender: true,
  setup(__props) {
    const concerns = [
      { q: "\u5C0D\u8A71\u6578\u64DA\u6703\u5514\u6703\u88AB AI \u8A13\u7DF4\uFF1F", a: "\u7D55\u5C0D\u5514\u6703\u3002PersonAI \u5E95\u5C64\u6280\u8853\u627F\u8AFE\u6578\u64DA\u4E0D\u7528\u65BC\u8A13\u7DF4\u4EFB\u4F55 AI \u6A21\u578B\u3002\u4F60\u7684\u696D\u52D9\u8CC7\u6599\u53EA\u7528\u65BC\u4F60\u81EA\u5DF1\u7684 AI \u52A9\u624B\uFF0C\u5514\u6703\u88AB\u5176\u4ED6\u4EBA\u6216\u7CFB\u7D71\u5B58\u53D6\u3002" },
      { q: "\u6578\u64DA\u5B58\u55BA\u908A\uFF1F\u53BB\u5514\u53BB\u7F8E\u570B\uFF1F", a: "\u7528\u6236\u5C0D\u8A71\u8A18\u9304\u5132\u5B58\u4E9E\u592A\u5340\uFF08\u65E5\u672C\uFF09\uFF0CTencent Cloud \u4F01\u696D\u7D1A\u6578\u64DA\u4E2D\u5FC3\u3002\u6578\u64DA\u5514\u53BB\u7F8E\u570B\uFF0C\u53D7\u4E9E\u592A\u5730\u5340\u6CD5\u5F8B\u4FDD\u8B77\uFF0C\u5514\u53D7\u7F8E\u570B CLOUD Act \u7BA1\u8F44\u3002" },
      { q: "\u54E1\u5DE5\u5C0D\u8A71\u6703\u5514\u6703\u6D29\u6F0F\u7D66\u540C\u4E8B\uFF1F", a: "\u6BCF\u500B WhatsApp \u5E33\u865F\u5B8C\u5168\u7368\u7ACB\u9694\u96E2\uFF0C\u7AEF\u5230\u7AEF\u52A0\u5BC6\u50B3\u8F38\u3002A \u54E1\u5DE5\u5605\u5C0D\u8A71\uFF0CB \u54E1\u5DE5\u7121\u6CD5\u5B58\u53D6\u3002\u7BA1\u7406\u54E1\u53EF\u4EE5\u67E5\u770B\u6574\u9AD4\u4F7F\u7528\u7D71\u8A08\uFF0C\u4F46\u5514\u80FD\u770B\u5230\u500B\u4EBA\u5C0D\u8A71\u5167\u5BB9\u3002" },
      { q: "\u9999\u6E2F\u6CD5\u5F8B\u7BA1\u5514\u7BA1\u5230\uFF1FPDPO \u5408\u898F\u55CE\uFF1F", a: "PersonAI \u7531\u9999\u6E2F\u516C\u53F8\uFF08Hostlink (HK) Limited \xD7 Area2 (HK) Limited\uFF09\u904B\u71DF\uFF0C\u5B8C\u5168\u7B26\u5408\u300A\u500B\u4EBA\u8CC7\u6599\uFF08\u79C1\u96B1\uFF09\u689D\u4F8B\u300B\uFF08PDPO\uFF09\u8981\u6C42\u3002\u4F01\u696D\u65B9\u6848\u53EF\u63D0\u4F9B DPA\uFF08\u6578\u64DA\u8655\u7406\u5354\u8B70\uFF09\u3002" }
    ];
    const infraSpecs = [
      "Tencent Cloud \u65E5\u672C\u5730\u5340\uFF08\u4E9E\u592A\uFF09\u6578\u64DA\u4E2D\u5FC3",
      "Tier 3+ \u6578\u64DA\u4E2D\u5FC3\uFF0C99.99% SLA",
      "\u4F01\u696D\u7D1A\u9632\u706B\u7246 + DDoS \u9632\u8B77",
      "\u6578\u64DA\u50B3\u8F38\u5168\u7A0B TLS 1.3 \u52A0\u5BC6",
      "\u5099\u4EFD\u6578\u64DA\u6BCF\u65E5\u5FEB\u7167",
      "\u6578\u64DA\u9694\u96E2\uFF1A\u6BCF\u500B\u7528\u6236\u7368\u7ACB\u5132\u5B58\u5340\u57DF"
    ];
    const certs = [
      { name: "ISO 27001", emoji: "\u{1F3C6}" },
      { name: "SOC 2 Type 2", emoji: "\u{1F510}" },
      { name: "CSA STAR", emoji: "\u2B50" },
      { name: "PDPO \u5408\u898F", emoji: "\u{1F1ED}\u{1F1F0}" },
      { name: "TLS 1.3", emoji: "\u{1F512}" },
      { name: "\u4F01\u696D\u9632\u706B\u7246", emoji: "\u{1F6E1}\uFE0F" }
    ];
    const compRows = [
      { feature: "\u6578\u64DA\u5B58\u5132\u4F4D\u7F6E", personai: "\u4E9E\u592A\u5340\uFF08\u65E5\u672C\uFF09", chatgpt: "\u7F8E\u570B", claude: "\u7F8E\u570B", others: "\u591A\u6578\u7F8E\u570B" },
      { feature: "\u662F\u5426\u8A13\u7DF4 AI \u6A21\u578B", personai: "\u2717 \u7D55\u4E0D", chatgpt: "\u53EF\u9078\u9000\u51FA", claude: "\u53EF\u9078\u9000\u51FA", others: "\u591A\u6578\u6703" },
      { feature: "PDPO \u5408\u898F", personai: "\u2713 \u5B8C\u5168\u5408\u898F", chatgpt: "\u90E8\u5206", claude: "\u90E8\u5206", others: "\u4E0D\u78BA\u5B9A" },
      { feature: "\u53EF\u7C3D DPA", personai: "\u2713 \u4F01\u696D\u7248", chatgpt: "\u4F01\u696D\u7248", claude: "\u4F01\u696D\u7248", others: "\u591A\u6578\u4E0D\u53EF" },
      { feature: "\u9999\u6E2F\u516C\u53F8\u904B\u71DF", personai: "\u2713 \u9999\u6E2F\u516C\u53F8", chatgpt: "\u7F8E\u570B\u516C\u53F8", claude: "\u7F8E\u570B\u516C\u53F8", others: "\u591A\u6578\u5916\u570B" },
      { feature: "ISO 27001", personai: "\u2713", chatgpt: "\u2713", claude: "\u2713", others: "\u4E0D\u78BA\u5B9A" },
      { feature: "\u9999\u6E2F\u672C\u5730\u652F\u63F4", personai: "\u2713 WhatsApp \u5EE3\u6771\u8A71", chatgpt: "\u2717", claude: "\u2717", others: "\u2717" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>\u8CC7\u8A0A\u5B89\u5168 | PersonAI \u2014 \u4F60\u7684\u696D\u52D9\u8CC7\u6599\uFF0C\u53EA\u5C6C\u65BC\u4F60</title><meta name="description" content="PersonAI \u8CC7\u8A0A\u5B89\u5168\u627F\u8AFE\uFF1A\u6578\u64DA\u5B58\u4E9E\u592A\u5340\uFF08\u65E5\u672C\uFF09\u3001\u7D55\u4E0D\u8A13\u7DF4\u6A21\u578B\u3001PDPO \u5408\u898F\u3002Tencent Cloud ISO 27001 / SOC 2 \u8A8D\u8B49\u3002"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "\u8CC7\u8A0A\u5B89\u5168 | PersonAI \u2014 \u4F60\u7684\u696D\u52D9\u8CC7\u6599\uFF0C\u53EA\u5C6C\u65BC\u4F60"),
              createVNode("meta", {
                name: "description",
                content: "PersonAI \u8CC7\u8A0A\u5B89\u5168\u627F\u8AFE\uFF1A\u6578\u64DA\u5B58\u4E9E\u592A\u5340\uFF08\u65E5\u672C\uFF09\u3001\u7D55\u4E0D\u8A13\u7DF4\u6A21\u578B\u3001PDPO \u5408\u898F\u3002Tencent Cloud ISO 27001 / SOC 2 \u8A8D\u8B49\u3002"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="bg-gradient-to-br from-slate-800 to-slate-900 py-16 text-white"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><div class="text-5xl mb-4">\u{1F512}</div><h1 class="text-4xl md:text-5xl font-black mb-4">\u4F60\u7684\u696D\u52D9\u8CC7\u6599\uFF0C\u53EA\u5C6C\u65BC\u4F60</h1><p class="text-slate-300 text-xl">SME \u6700\u64D4\u5FC3\u7684 4 \u500B\u5B89\u5168\u554F\u984C\uFF0CPersonAI \u4E00\u4E00\u6B63\u9762\u56DE\u61C9</p></div></section><section class="section-white py-16"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="space-y-8"><!--[-->`);
      ssrRenderList(concerns, (concern, i) => {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="bg-red-50 rounded-2xl p-6 border border-red-100"><div class="flex items-center gap-2 mb-3"><span class="text-red-500 font-bold">\u2753</span><span class="text-red-600 font-semibold text-sm">\u4F01\u696D\u9867\u616E</span></div><p class="text-gray-800 font-semibold">${ssrInterpolate(concern.q)}</p></div><div class="bg-green-50 rounded-2xl p-6 border border-green-100"><div class="flex items-center gap-2 mb-3"><span class="text-green-500 font-bold">\u2705</span><span class="text-green-600 font-semibold text-sm">PersonAI \u7B54\u6848</span></div><p class="text-gray-800">${ssrInterpolate(concern.a)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section-blue py-16"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-10"><h2 class="text-3xl font-black text-gray-900 mb-4">\u{1F1EF}\u{1F1F5} Tencent Cloud \u4E9E\u592A\u6578\u64DA\u4E2D\u5FC3\uFF08\u65E5\u672C\uFF09</h2><p class="text-gray-600">\u7531 Hostlink (HK) Limited \u63D0\u4F9B\u4F01\u696D\u7D1A\u57FA\u790E\u8A2D\u65BD\u652F\u6301</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"><div class="bg-white rounded-2xl p-6 shadow-sm"><h3 class="font-bold text-gray-900 mb-4">\u{1F3D7}\uFE0F \u57FA\u790E\u8A2D\u65BD\u898F\u683C</h3><ul class="space-y-3"><!--[-->`);
      ssrRenderList(infraSpecs, (spec) => {
        _push(`<li class="flex items-center gap-3 text-sm text-gray-700"><span class="text-blue-500">\u25B8</span>${ssrInterpolate(spec)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="bg-white rounded-2xl p-6 shadow-sm"><h3 class="font-bold text-gray-900 mb-4">\u{1F4DC} \u8A8D\u8B49\u6E05\u55AE</h3><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(certs, (cert) => {
        _push(`<div class="text-center p-3 bg-blue-50 rounded-xl border border-blue-100"><div class="text-xl mb-1">${ssrInterpolate(cert.emoji)}</div><div class="font-semibold text-blue-700 text-xs">${ssrInterpolate(cert.name)}</div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section><section class="section-white py-16"><div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-3xl font-black text-gray-900 text-center mb-10">\u7AF6\u54C1\u5B89\u5168\u6BD4\u8F03</h2><div class="overflow-x-auto rounded-2xl shadow-sm border border-gray-100"><table class="w-full bg-white"><thead><tr class="bg-gray-50"><th class="text-left px-6 py-4 font-semibold text-gray-700">\u5B89\u5168\u6307\u6A19</th><th class="text-center px-4 py-4 font-semibold text-blue-700">PersonAI \u2705</th><th class="text-center px-4 py-4 font-semibold text-gray-500">ChatGPT</th><th class="text-center px-4 py-4 font-semibold text-gray-500">Claude.ai</th><th class="text-center px-4 py-4 font-semibold text-gray-500">\u4E00\u822C AI \u5DE5\u5177</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(compRows, (row, i) => {
        _push(`<tr class="${ssrRenderClass(i % 2 === 0 ? "bg-white" : "bg-gray-50/50")}"><td class="px-6 py-3 text-sm text-gray-700 font-medium">${ssrInterpolate(row.feature)}</td><td class="text-center px-4 py-3 text-sm font-medium text-green-600">${ssrInterpolate(row.personai)}</td><td class="text-center px-4 py-3 text-sm text-gray-500">${ssrInterpolate(row.chatgpt)}</td><td class="text-center px-4 py-3 text-sm text-gray-500">${ssrInterpolate(row.claude)}</td><td class="text-center px-4 py-3 text-sm text-gray-500">${ssrInterpolate(row.others)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></section><section class="section-security py-12"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 class="text-3xl font-black text-white mb-4">\u5C0D\u5B89\u5168\u6709\u66F4\u591A\u7591\u554F\uFF1F</h2><p class="text-blue-300 mb-8">\u6211\u54CB\u7684\u6280\u8853\u5718\u968A\u96A8\u6642\u4EE5 WhatsApp \u5EE3\u6771\u8A71\u89E3\u7B54\u4F60\u7684\u5B89\u5168\u5408\u898F\u554F\u984C</p><div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="https://wa.me/85296456787?text=\u4F60\u597D\uFF01\u6211\u60F3\u4E86\u89E3 PersonAI \u7684\u8CC7\u8A0A\u5B89\u5168\u8A73\u60C5" target="_blank" class="inline-flex items-center justify-center gap-2 bg-green-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-500 transition-colors"> \u{1F4AC} WhatsApp \u8A62\u554F\u5B89\u5168\u554F\u984C </a><a href="mailto:eric@hostlink.com.hk" class="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"> \u2709\uFE0F Email \u67E5\u8A62 </a></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/security.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=security-cxV8-foF.mjs.map
