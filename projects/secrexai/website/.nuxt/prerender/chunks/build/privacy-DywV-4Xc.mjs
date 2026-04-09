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
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    const sections = [
      { title: "1. \u8CC7\u6599\u6536\u96C6", content: "PersonAI \u6536\u96C6\u4F60\u5728\u767B\u8A18\u3001\u4F7F\u7528\u670D\u52D9\u6642\u63D0\u4F9B\u7684\u500B\u4EBA\u8CC7\u6599\uFF0C\u5305\u62EC\u59D3\u540D\u3001\u96FB\u90F5\u5730\u5740\u3001WhatsApp \u865F\u78BC\u3001\u516C\u53F8\u540D\u7A31\u53CA\u670D\u52D9\u4F7F\u7528\u8A18\u9304\u3002" },
      { title: "2. \u8CC7\u6599\u4F7F\u7528", content: "\u6240\u6536\u96C6\u7684\u8CC7\u6599\u7528\u65BC\u63D0\u4F9B PersonAI \u670D\u52D9\u3001\u56DE\u8986\u67E5\u8A62\u3001\u767C\u9001\u670D\u52D9\u901A\u77E5\u53CA\u6539\u5584\u670D\u52D9\u8CEA\u7D20\u3002\u6211\u5011\u4E0D\u6703\u5C07\u4F60\u7684\u500B\u4EBA\u8CC7\u6599\u7528\u65BC\u5EE3\u544A\u5B9A\u5411\u6216\u51FA\u552E\u4E88\u7B2C\u4E09\u65B9\u3002" },
      { title: "3. \u8CC7\u6599\u5132\u5B58", content: "\u4F60\u7684\u5C0D\u8A71\u8A18\u9304\u53CA\u500B\u4EBA\u8CC7\u6599\u5132\u5B58\u65BC Tencent Cloud \u4E9E\u592A\u5340\uFF08\u65E5\u672C\uFF09\u6578\u64DA\u4E2D\u5FC3\uFF0C\u53D7\u4F01\u696D\u7D1A\u5B89\u5168\u63AA\u65BD\u4FDD\u8B77\uFF0C\u5514\u6703\u50B3\u9001\u81F3\u7F8E\u570B\u6216\u5176\u4ED6\u53F8\u6CD5\u7BA1\u8F44\u5340\u3002" },
      { title: "4. \u8CC7\u6599\u5B89\u5168", content: "\u6211\u5011\u63A1\u7528 TLS 1.3 \u52A0\u5BC6\u50B3\u8F38\u3001\u7AEF\u5230\u7AEF\u52A0\u5BC6\u5132\u5B58\u3001\u5B9A\u671F\u5B89\u5168\u5BE9\u8A08\u53CA\u56B4\u683C\u7684\u5B58\u53D6\u63A7\u5236\u63AA\u65BD\uFF0C\u78BA\u4FDD\u4F60\u7684\u8CC7\u6599\u5B89\u5168\u3002" },
      { title: "5. AI \u6A21\u578B\u8A13\u7DF4", content: "\u6211\u5011\u627F\u8AFE\u4E0D\u6703\u4F7F\u7528\u4EFB\u4F55\u7528\u6236\u5C0D\u8A71\u8A18\u9304\u6216\u500B\u4EBA\u8CC7\u6599\u8A13\u7DF4 AI \u6A21\u578B\u3002\u4F60\u7684\u696D\u52D9\u8CC7\u6599\u53EA\u7528\u65BC\u4F60\u81EA\u5DF1\u7684 PersonAI \u670D\u52D9\u3002" },
      { title: "6. \u9999\u6E2F PDPO \u5408\u898F", content: "PersonAI \u5B8C\u5168\u7B26\u5408\u9999\u6E2F\u300A\u500B\u4EBA\u8CC7\u6599\uFF08\u79C1\u96B1\uFF09\u689D\u4F8B\u300B\uFF08PDPO\uFF09\u7684\u8981\u6C42\uFF0C\u5305\u62EC\u8CC7\u6599\u6536\u96C6\u76EE\u7684\u544A\u77E5\u3001\u8CC7\u6599\u5B58\u53D6\u6B0A\u5229\u53CA\u8CC7\u6599\u4FDD\u7559\u671F\u9650\u3002" },
      { title: "7. \u4F60\u7684\u6B0A\u5229", content: "\u4F60\u6709\u6B0A\u5B58\u53D6\u3001\u66F4\u6B63\u6216\u8981\u6C42\u522A\u9664\u4F60\u7684\u500B\u4EBA\u8CC7\u6599\u3002\u5982\u9700\u884C\u4F7F\u4E0A\u8FF0\u6B0A\u5229\uFF0C\u8ACB\u806F\u7D61\u6211\u5011\u3002" },
      { title: "8. Cookie \u4F7F\u7528", content: "\u6211\u5011\u7684\u7DB2\u7AD9\u4F7F\u7528\u5FC5\u8981\u7684 Cookie \u78BA\u4FDD\u7DB2\u7AD9\u6B63\u5E38\u904B\u4F5C\u53CA\u7D71\u8A08\u8A2A\u554F\u6578\u64DA\uFF0C\u4EE5\u6539\u5584\u7528\u6236\u9AD4\u9A57\u3002" },
      { title: "9. \u653F\u7B56\u66F4\u65B0", content: "\u6211\u5011\u53EF\u80FD\u4E0D\u5B9A\u671F\u66F4\u65B0\u672C\u79C1\u96B1\u653F\u7B56\u3002\u91CD\u5927\u8B8A\u66F4\u6642\uFF0C\u6211\u5011\u6703\u4EE5 WhatsApp \u6216\u96FB\u90F5\u901A\u77E5\u73FE\u6709\u7528\u6236\u3002" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>\u79C1\u96B1\u653F\u7B56 | PersonAI</title><meta name="description" content="PersonAI \u79C1\u96B1\u653F\u7B56\u3002\u4E86\u89E3\u6211\u5011\u5982\u4F55\u6536\u96C6\u3001\u4F7F\u7528\u548C\u4FDD\u8B77\u4F60\u7684\u500B\u4EBA\u8CC7\u6599\uFF0C\u7B26\u5408\u9999\u6E2F PDPO \u8981\u6C42\u3002"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "\u79C1\u96B1\u653F\u7B56 | PersonAI"),
              createVNode("meta", {
                name: "description",
                content: "PersonAI \u79C1\u96B1\u653F\u7B56\u3002\u4E86\u89E3\u6211\u5011\u5982\u4F55\u6536\u96C6\u3001\u4F7F\u7528\u548C\u4FDD\u8B77\u4F60\u7684\u500B\u4EBA\u8CC7\u6599\uFF0C\u7B26\u5408\u9999\u6E2F PDPO \u8981\u6C42\u3002"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="section-bg py-16"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><h1 class="text-3xl font-black text-gray-900 mb-2">\u79C1\u96B1\u653F\u7B56</h1><p class="text-gray-400 text-sm mb-8">\u6700\u5F8C\u66F4\u65B0\uFF1A2026 \u5E74 3 \u6708</p><div class="prose prose-gray max-w-none space-y-6"><!--[-->`);
      ssrRenderList(sections, (section) => {
        _push(`<div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"><h2 class="font-black text-lg text-gray-900 mb-3">${ssrInterpolate(section.title)}</h2><p class="text-gray-600 text-sm leading-relaxed">${ssrInterpolate(section.content)}</p></div>`);
      });
      _push(`<!--]--><div class="bg-blue-50 rounded-2xl p-6 border border-blue-100"><p class="text-blue-700 text-sm">\u5982\u6709\u4EFB\u4F55\u95DC\u65BC\u79C1\u96B1\u7684\u554F\u984C\uFF0C\u8ACB WhatsApp <strong>+852 9645 6787</strong> \u6216 Email <strong>eric@hostlink.com.hk</strong> \u806F\u7D61\u6211\u54CB\u3002</p></div></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=privacy-DywV-4Xc.mjs.map
