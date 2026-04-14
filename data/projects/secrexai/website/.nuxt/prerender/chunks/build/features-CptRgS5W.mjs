import { defineComponent, mergeProps, useSSRContext } from 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "features",
  __ssrInlineRender: true,
  setup(__props) {
    const skills = [
      { icon: "\u{1F4E7}", title: "Email \u52A9\u624B", desc: "\u64B0\u5BEB\u3001\u56DE\u8986\u3001\u7E3D\u7D50\u96FB\u90F5" },
      { icon: "\u{1F4C5}", title: "\u884C\u7A0B\u7BA1\u7406", desc: "\u6392\u7A0B\u63D0\u9192\u3001\u6703\u8B70\u7D71\u7C4C" },
      { icon: "\u{1F4CA}", title: "\u6578\u64DA\u5206\u6790", desc: "Excel/PDF \u5831\u544A\u89E3\u8B80" },
      { icon: "\u270D\uFE0F", title: "\u6587\u6848\u5275\u4F5C", desc: "EDM\u3001\u793E\u4EA4\u5A92\u9AD4\u3001\u5EE3\u544A" },
      { icon: "\u{1F310}", title: "\u7DB2\u9801\u641C\u5C0B", desc: "\u6700\u65B0\u8CC7\u8A0A\u5373\u6642\u67E5\u627E" },
      { icon: "\u{1F5BC}\uFE0F", title: "\u5716\u7247\u751F\u6210", desc: "Nano Banana Pro \u5C08\u696D\u5716\u7247" },
      { icon: "\u{1F399}\uFE0F", title: "\u8A9E\u97F3\u8F49\u6587\u5B57", desc: "\u6703\u8B70\u9304\u97F3\u81EA\u52D5\u8F49\u9304" },
      { icon: "\u{1F4DD}", title: "\u6703\u8B70\u7D00\u9304", desc: "\u81EA\u52D5\u6458\u8981\u884C\u52D5\u9805\u76EE" },
      { icon: "\u{1F916}", title: "\u4EE3\u78BC\u52A9\u624B", desc: "\u7A0B\u5F0F\u958B\u767C debug" },
      { icon: "\u{1F4E6}", title: "\u7FFB\u8B6F\u52A9\u624B", desc: "\u4E2D\u82F1\u7CB5\u5373\u6642\u7FFB\u8B6F" },
      { icon: "\u{1F50D}", title: "\u5E02\u5834\u7814\u7A76", desc: "\u7AF6\u54C1\u5206\u6790\u884C\u696D\u8DA8\u52E2" },
      { icon: "\u{1F4BC}", title: "\u5546\u696D\u7B56\u5283", desc: "\u63D0\u6848\u5831\u544A\u7B56\u7565\u5EFA\u8B70" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#0A0A0F] text-white" }, _attrs))}><div class="container mx-auto px-4 py-20 max-w-5xl"><div class="text-center mb-16"><h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"> PersonAI \u6280\u80FD\u4E00\u89BD </h1><p class="text-xl text-gray-400 max-w-2xl mx-auto"> 60+ \u6280\u80FD\uFF0C\u4E00\u500B\u5E73\u53F0\uFF0C\u5168\u90E8\u5E6B\u4F60\u641E\u6382 </p></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(skills, (skill) => {
        _push(`<div class="bg-[#111] border border-[#222] rounded-2xl p-6 hover:border-green-500/50 transition-all"><div class="text-3xl mb-3">${ssrInterpolate(skill.icon)}</div><h3 class="text-lg font-semibold text-white mb-2">${ssrInterpolate(skill.title)}</h3><p class="text-sm text-gray-400">${ssrInterpolate(skill.desc)}</p></div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-16"><a href="/early-access" class="inline-block bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all"> \u7ACB\u5373\u514D\u8CBB\u8A66\u7528 \u2192 </a></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/features.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=features-CptRgS5W.mjs.map
