import { H as Head } from './components-7B7l7irn.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/vue/index.mjs';
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
  __name: "disclaimer",
  __ssrInlineRender: true,
  setup(__props) {
    const sections = [
      { title: "1. AI \u751F\u6210\u5167\u5BB9", content: "PersonAI \u7531 AI \u6280\u8853\u9A45\u52D5\uFF0C\u751F\u6210\u7684\u5167\u5BB9\u50C5\u4F9B\u53C3\u8003\u3002\u7528\u6236\u61C9\u81EA\u884C\u5224\u65B7 AI \u751F\u6210\u7684\u5EFA\u8B70\u3001\u8CC7\u8A0A\u6216\u5206\u6790\u662F\u5426\u9069\u7528\u65BC\u5176\u5177\u9AD4\u60C5\u6CC1\uFF0C\u4E26\u5728\u9700\u8981\u6642\u54A8\u8A62\u76F8\u95DC\u5C08\u696D\u4EBA\u58EB\u3002" },
      { title: "2. \u6E96\u78BA\u6027", content: "\u96D6\u7136\u6211\u5011\u81F4\u529B\u63D0\u4F9B\u6E96\u78BA\u548C\u6700\u65B0\u7684\u8CC7\u8A0A\uFF0C\u4F46 PersonAI \u4E0D\u4FDD\u8B49\u5176\u751F\u6210\u7684\u6240\u6709\u5167\u5BB9\u5B8C\u5168\u6E96\u78BA\u3001\u5B8C\u6574\u6216\u6700\u65B0\u3002AI \u6280\u8853\u6709\u5176\u5C40\u9650\u6027\uFF0C\u53EF\u80FD\u5076\u723E\u7522\u751F\u4E0D\u6E96\u78BA\u7684\u56DE\u61C9\u3002" },
      { title: "3. \u5C08\u696D\u5EFA\u8B70", content: "\u672C\u670D\u52D9\u63D0\u4F9B\u7684\u4EFB\u4F55\u8CC7\u8A0A\u4E0D\u69CB\u6210\u6CD5\u5F8B\u3001\u8CA1\u52D9\u3001\u91AB\u7642\u3001\u5FC3\u7406\u6216\u5176\u4ED6\u5C08\u696D\u5EFA\u8B70\u3002\u5728\u505A\u51FA\u91CD\u8981\u6C7A\u5B9A\u524D\uFF0C\u8ACB\u8AEE\u8A62\u6301\u724C\u5C08\u696D\u4EBA\u58EB\u3002" },
      { title: "4. \u7B2C\u4E09\u65B9\u9023\u7D50", content: "\u672C\u7DB2\u7AD9\u53EF\u80FD\u5305\u542B\u7B2C\u4E09\u65B9\u7DB2\u7AD9\u7684\u9023\u7D50\u3002PersonAI \u5C0D\u7B2C\u4E09\u65B9\u7DB2\u7AD9\u7684\u5167\u5BB9\u3001\u96B1\u79C1\u653F\u7B56\u6216\u505A\u6CD5\u4E0D\u8CA0\u8CAC\u4EFB\u3002" },
      { title: "5. \u670D\u52D9\u8B8A\u66F4", content: "PersonAI \u4FDD\u7559\u96A8\u6642\u4FEE\u6539\u3001\u66AB\u505C\u6216\u7D42\u6B62\u670D\u52D9\u7684\u6B0A\u5229\uFF0C\u4F46\u6703\u76E1\u53EF\u80FD\u63D0\u524D\u901A\u77E5\u7528\u6236\u3002" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>\u514D\u8CAC\u8072\u660E | PersonAI</title><meta name="description" content="PersonAI \u514D\u8CAC\u8072\u660E\u3002"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "\u514D\u8CAC\u8072\u660E | PersonAI"),
              createVNode("meta", {
                name: "description",
                content: "PersonAI \u514D\u8CAC\u8072\u660E\u3002"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="section-bg py-16"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><h1 class="text-3xl font-black text-gray-900 mb-2">\u514D\u8CAC\u8072\u660E</h1><p class="text-gray-400 text-sm mb-8">\u6700\u5F8C\u66F4\u65B0\uFF1A2026 \u5E74 3 \u6708</p><div class="space-y-4"><!--[-->`);
      ssrRenderList(sections, (s) => {
        _push(`<div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"><h2 class="font-black text-lg text-gray-900 mb-3">${ssrInterpolate(s.title)}</h2><p class="text-gray-600 text-sm leading-relaxed">${ssrInterpolate(s.content)}</p></div>`);
      });
      _push(`<!--]--><div class="bg-blue-50 rounded-2xl p-6 border border-blue-100"><p class="text-blue-700 text-sm">\u5982\u6709\u4EFB\u4F55\u554F\u984C\uFF0C\u8ACB WhatsApp <strong>+852 9645 6787</strong> \u6216 Email <strong>eric@hostlink.com.hk</strong> \u806F\u7D61\u6211\u54CB\u3002</p></div></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/disclaimer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=disclaimer-D14Yleb-.mjs.map
