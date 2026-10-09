var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/obsidian-dataview/lib/index.js
var require_lib = __commonJS({
  "node_modules/obsidian-dataview/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require("obsidian");
    var LuxonError2 = class extends Error {
    };
    var InvalidDateTimeError2 = class extends LuxonError2 {
      constructor(reason) {
        super(`Invalid DateTime: ${reason.toMessage()}`);
      }
    };
    var InvalidIntervalError2 = class extends LuxonError2 {
      constructor(reason) {
        super(`Invalid Interval: ${reason.toMessage()}`);
      }
    };
    var InvalidDurationError2 = class extends LuxonError2 {
      constructor(reason) {
        super(`Invalid Duration: ${reason.toMessage()}`);
      }
    };
    var ConflictingSpecificationError2 = class extends LuxonError2 {
    };
    var InvalidUnitError2 = class extends LuxonError2 {
      constructor(unit) {
        super(`Invalid unit ${unit}`);
      }
    };
    var InvalidArgumentError2 = class extends LuxonError2 {
    };
    var ZoneIsAbstractError2 = class extends LuxonError2 {
      constructor() {
        super("Zone is an abstract class");
      }
    };
    var n2 = "numeric";
    var s2 = "short";
    var l2 = "long";
    var DATE_SHORT2 = {
      year: n2,
      month: n2,
      day: n2
    };
    var DATE_MED2 = {
      year: n2,
      month: s2,
      day: n2
    };
    var DATE_MED_WITH_WEEKDAY2 = {
      year: n2,
      month: s2,
      day: n2,
      weekday: s2
    };
    var DATE_FULL2 = {
      year: n2,
      month: l2,
      day: n2
    };
    var DATE_HUGE2 = {
      year: n2,
      month: l2,
      day: n2,
      weekday: l2
    };
    var TIME_SIMPLE2 = {
      hour: n2,
      minute: n2
    };
    var TIME_WITH_SECONDS2 = {
      hour: n2,
      minute: n2,
      second: n2
    };
    var TIME_WITH_SHORT_OFFSET2 = {
      hour: n2,
      minute: n2,
      second: n2,
      timeZoneName: s2
    };
    var TIME_WITH_LONG_OFFSET2 = {
      hour: n2,
      minute: n2,
      second: n2,
      timeZoneName: l2
    };
    var TIME_24_SIMPLE2 = {
      hour: n2,
      minute: n2,
      hourCycle: "h23"
    };
    var TIME_24_WITH_SECONDS2 = {
      hour: n2,
      minute: n2,
      second: n2,
      hourCycle: "h23"
    };
    var TIME_24_WITH_SHORT_OFFSET2 = {
      hour: n2,
      minute: n2,
      second: n2,
      hourCycle: "h23",
      timeZoneName: s2
    };
    var TIME_24_WITH_LONG_OFFSET2 = {
      hour: n2,
      minute: n2,
      second: n2,
      hourCycle: "h23",
      timeZoneName: l2
    };
    var DATETIME_SHORT2 = {
      year: n2,
      month: n2,
      day: n2,
      hour: n2,
      minute: n2
    };
    var DATETIME_SHORT_WITH_SECONDS2 = {
      year: n2,
      month: n2,
      day: n2,
      hour: n2,
      minute: n2,
      second: n2
    };
    var DATETIME_MED2 = {
      year: n2,
      month: s2,
      day: n2,
      hour: n2,
      minute: n2
    };
    var DATETIME_MED_WITH_SECONDS2 = {
      year: n2,
      month: s2,
      day: n2,
      hour: n2,
      minute: n2,
      second: n2
    };
    var DATETIME_MED_WITH_WEEKDAY2 = {
      year: n2,
      month: s2,
      day: n2,
      weekday: s2,
      hour: n2,
      minute: n2
    };
    var DATETIME_FULL2 = {
      year: n2,
      month: l2,
      day: n2,
      hour: n2,
      minute: n2,
      timeZoneName: s2
    };
    var DATETIME_FULL_WITH_SECONDS2 = {
      year: n2,
      month: l2,
      day: n2,
      hour: n2,
      minute: n2,
      second: n2,
      timeZoneName: s2
    };
    var DATETIME_HUGE2 = {
      year: n2,
      month: l2,
      day: n2,
      weekday: l2,
      hour: n2,
      minute: n2,
      timeZoneName: l2
    };
    var DATETIME_HUGE_WITH_SECONDS2 = {
      year: n2,
      month: l2,
      day: n2,
      weekday: l2,
      hour: n2,
      minute: n2,
      second: n2,
      timeZoneName: l2
    };
    var Zone2 = class {
      get type() {
        throw new ZoneIsAbstractError2();
      }
      get name() {
        throw new ZoneIsAbstractError2();
      }
      get ianaName() {
        return this.name;
      }
      get isUniversal() {
        throw new ZoneIsAbstractError2();
      }
      offsetName(ts, opts) {
        throw new ZoneIsAbstractError2();
      }
      formatOffset(ts, format) {
        throw new ZoneIsAbstractError2();
      }
      offset(ts) {
        throw new ZoneIsAbstractError2();
      }
      equals(otherZone) {
        throw new ZoneIsAbstractError2();
      }
      get isValid() {
        throw new ZoneIsAbstractError2();
      }
    };
    var singleton$1 = null;
    var SystemZone2 = class extends Zone2 {
      static get instance() {
        if (singleton$1 === null) {
          singleton$1 = new SystemZone2();
        }
        return singleton$1;
      }
      get type() {
        return "system";
      }
      get name() {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
      }
      get isUniversal() {
        return false;
      }
      offsetName(ts, { format, locale }) {
        return parseZoneInfo2(ts, format, locale);
      }
      formatOffset(ts, format) {
        return formatOffset2(this.offset(ts), format);
      }
      offset(ts) {
        return -new Date(ts).getTimezoneOffset();
      }
      equals(otherZone) {
        return otherZone.type === "system";
      }
      get isValid() {
        return true;
      }
    };
    var dtfCache2 = {};
    function makeDTF2(zone) {
      if (!dtfCache2[zone]) {
        dtfCache2[zone] = new Intl.DateTimeFormat("en-US", {
          hour12: false,
          timeZone: zone,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          era: "short"
        });
      }
      return dtfCache2[zone];
    }
    var typeToPos2 = {
      year: 0,
      month: 1,
      day: 2,
      era: 3,
      hour: 4,
      minute: 5,
      second: 6
    };
    function hackyOffset2(dtf, date) {
      const formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted), [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
      return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
    }
    function partsOffset2(dtf, date) {
      const formatted = dtf.formatToParts(date);
      const filled = [];
      for (let i = 0; i < formatted.length; i++) {
        const { type, value } = formatted[i];
        const pos = typeToPos2[type];
        if (type === "era") {
          filled[pos] = value;
        } else if (!isUndefined2(pos)) {
          filled[pos] = parseInt(value, 10);
        }
      }
      return filled;
    }
    var ianaZoneCache2 = {};
    var IANAZone2 = class extends Zone2 {
      static create(name) {
        if (!ianaZoneCache2[name]) {
          ianaZoneCache2[name] = new IANAZone2(name);
        }
        return ianaZoneCache2[name];
      }
      static resetCache() {
        ianaZoneCache2 = {};
        dtfCache2 = {};
      }
      static isValidSpecifier(s3) {
        return this.isValidZone(s3);
      }
      static isValidZone(zone) {
        if (!zone) {
          return false;
        }
        try {
          new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
          return true;
        } catch (e) {
          return false;
        }
      }
      constructor(name) {
        super();
        this.zoneName = name;
        this.valid = IANAZone2.isValidZone(name);
      }
      get type() {
        return "iana";
      }
      get name() {
        return this.zoneName;
      }
      get isUniversal() {
        return false;
      }
      offsetName(ts, { format, locale }) {
        return parseZoneInfo2(ts, format, locale, this.name);
      }
      formatOffset(ts, format) {
        return formatOffset2(this.offset(ts), format);
      }
      offset(ts) {
        const date = new Date(ts);
        if (isNaN(date))
          return NaN;
        const dtf = makeDTF2(this.name);
        let [year, month, day, adOrBc, hour, minute, second] = dtf.formatToParts ? partsOffset2(dtf, date) : hackyOffset2(dtf, date);
        if (adOrBc === "BC") {
          year = -Math.abs(year) + 1;
        }
        const adjustedHour = hour === 24 ? 0 : hour;
        const asUTC = objToLocalTS2({
          year,
          month,
          day,
          hour: adjustedHour,
          minute,
          second,
          millisecond: 0
        });
        let asTS = +date;
        const over = asTS % 1e3;
        asTS -= over >= 0 ? over : 1e3 + over;
        return (asUTC - asTS) / (60 * 1e3);
      }
      equals(otherZone) {
        return otherZone.type === "iana" && otherZone.name === this.name;
      }
      get isValid() {
        return this.valid;
      }
    };
    var intlLFCache2 = {};
    function getCachedLF2(locString, opts = {}) {
      const key = JSON.stringify([locString, opts]);
      let dtf = intlLFCache2[key];
      if (!dtf) {
        dtf = new Intl.ListFormat(locString, opts);
        intlLFCache2[key] = dtf;
      }
      return dtf;
    }
    var intlDTCache2 = {};
    function getCachedDTF2(locString, opts = {}) {
      const key = JSON.stringify([locString, opts]);
      let dtf = intlDTCache2[key];
      if (!dtf) {
        dtf = new Intl.DateTimeFormat(locString, opts);
        intlDTCache2[key] = dtf;
      }
      return dtf;
    }
    var intlNumCache2 = {};
    function getCachedINF2(locString, opts = {}) {
      const key = JSON.stringify([locString, opts]);
      let inf = intlNumCache2[key];
      if (!inf) {
        inf = new Intl.NumberFormat(locString, opts);
        intlNumCache2[key] = inf;
      }
      return inf;
    }
    var intlRelCache2 = {};
    function getCachedRTF2(locString, opts = {}) {
      const { base, ...cacheKeyOpts } = opts;
      const key = JSON.stringify([locString, cacheKeyOpts]);
      let inf = intlRelCache2[key];
      if (!inf) {
        inf = new Intl.RelativeTimeFormat(locString, opts);
        intlRelCache2[key] = inf;
      }
      return inf;
    }
    var sysLocaleCache2 = null;
    function systemLocale2() {
      if (sysLocaleCache2) {
        return sysLocaleCache2;
      } else {
        sysLocaleCache2 = new Intl.DateTimeFormat().resolvedOptions().locale;
        return sysLocaleCache2;
      }
    }
    function parseLocaleString2(localeStr) {
      const xIndex = localeStr.indexOf("-x-");
      if (xIndex !== -1) {
        localeStr = localeStr.substring(0, xIndex);
      }
      const uIndex = localeStr.indexOf("-u-");
      if (uIndex === -1) {
        return [localeStr];
      } else {
        let options;
        let selectedStr;
        try {
          options = getCachedDTF2(localeStr).resolvedOptions();
          selectedStr = localeStr;
        } catch (e) {
          const smaller = localeStr.substring(0, uIndex);
          options = getCachedDTF2(smaller).resolvedOptions();
          selectedStr = smaller;
        }
        const { numberingSystem, calendar } = options;
        return [selectedStr, numberingSystem, calendar];
      }
    }
    function intlConfigString2(localeStr, numberingSystem, outputCalendar) {
      if (outputCalendar || numberingSystem) {
        if (!localeStr.includes("-u-")) {
          localeStr += "-u";
        }
        if (outputCalendar) {
          localeStr += `-ca-${outputCalendar}`;
        }
        if (numberingSystem) {
          localeStr += `-nu-${numberingSystem}`;
        }
        return localeStr;
      } else {
        return localeStr;
      }
    }
    function mapMonths2(f) {
      const ms = [];
      for (let i = 1; i <= 12; i++) {
        const dt = DateTime2.utc(2009, i, 1);
        ms.push(f(dt));
      }
      return ms;
    }
    function mapWeekdays2(f) {
      const ms = [];
      for (let i = 1; i <= 7; i++) {
        const dt = DateTime2.utc(2016, 11, 13 + i);
        ms.push(f(dt));
      }
      return ms;
    }
    function listStuff2(loc, length, englishFn, intlFn) {
      const mode = loc.listingMode();
      if (mode === "error") {
        return null;
      } else if (mode === "en") {
        return englishFn(length);
      } else {
        return intlFn(length);
      }
    }
    function supportsFastNumbers2(loc) {
      if (loc.numberingSystem && loc.numberingSystem !== "latn") {
        return false;
      } else {
        return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
      }
    }
    var PolyNumberFormatter2 = class {
      constructor(intl, forceSimple, opts) {
        this.padTo = opts.padTo || 0;
        this.floor = opts.floor || false;
        const { padTo, floor, ...otherOpts } = opts;
        if (!forceSimple || Object.keys(otherOpts).length > 0) {
          const intlOpts = { useGrouping: false, ...opts };
          if (opts.padTo > 0)
            intlOpts.minimumIntegerDigits = opts.padTo;
          this.inf = getCachedINF2(intl, intlOpts);
        }
      }
      format(i) {
        if (this.inf) {
          const fixed = this.floor ? Math.floor(i) : i;
          return this.inf.format(fixed);
        } else {
          const fixed = this.floor ? Math.floor(i) : roundTo2(i, 3);
          return padStart2(fixed, this.padTo);
        }
      }
    };
    var PolyDateFormatter2 = class {
      constructor(dt, intl, opts) {
        this.opts = opts;
        this.originalZone = void 0;
        let z = void 0;
        if (this.opts.timeZone) {
          this.dt = dt;
        } else if (dt.zone.type === "fixed") {
          const gmtOffset = -1 * (dt.offset / 60);
          const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
          if (dt.offset !== 0 && IANAZone2.create(offsetZ).valid) {
            z = offsetZ;
            this.dt = dt;
          } else {
            z = "UTC";
            this.dt = dt.offset === 0 ? dt : dt.setZone("UTC").plus({ minutes: dt.offset });
            this.originalZone = dt.zone;
          }
        } else if (dt.zone.type === "system") {
          this.dt = dt;
        } else if (dt.zone.type === "iana") {
          this.dt = dt;
          z = dt.zone.name;
        } else {
          z = "UTC";
          this.dt = dt.setZone("UTC").plus({ minutes: dt.offset });
          this.originalZone = dt.zone;
        }
        const intlOpts = { ...this.opts };
        intlOpts.timeZone = intlOpts.timeZone || z;
        this.dtf = getCachedDTF2(intl, intlOpts);
      }
      format() {
        if (this.originalZone) {
          return this.formatToParts().map(({ value }) => value).join("");
        }
        return this.dtf.format(this.dt.toJSDate());
      }
      formatToParts() {
        const parts = this.dtf.formatToParts(this.dt.toJSDate());
        if (this.originalZone) {
          return parts.map((part) => {
            if (part.type === "timeZoneName") {
              const offsetName = this.originalZone.offsetName(this.dt.ts, {
                locale: this.dt.locale,
                format: this.opts.timeZoneName
              });
              return {
                ...part,
                value: offsetName
              };
            } else {
              return part;
            }
          });
        }
        return parts;
      }
      resolvedOptions() {
        return this.dtf.resolvedOptions();
      }
    };
    var PolyRelFormatter2 = class {
      constructor(intl, isEnglish, opts) {
        this.opts = { style: "long", ...opts };
        if (!isEnglish && hasRelative2()) {
          this.rtf = getCachedRTF2(intl, opts);
        }
      }
      format(count, unit) {
        if (this.rtf) {
          return this.rtf.format(count, unit);
        } else {
          return formatRelativeTime2(unit, count, this.opts.numeric, this.opts.style !== "long");
        }
      }
      formatToParts(count, unit) {
        if (this.rtf) {
          return this.rtf.formatToParts(count, unit);
        } else {
          return [];
        }
      }
    };
    var Locale2 = class {
      static fromOpts(opts) {
        return Locale2.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
      }
      static create(locale, numberingSystem, outputCalendar, defaultToEN = false) {
        const specifiedLocale = locale || Settings2.defaultLocale;
        const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale2());
        const numberingSystemR = numberingSystem || Settings2.defaultNumberingSystem;
        const outputCalendarR = outputCalendar || Settings2.defaultOutputCalendar;
        return new Locale2(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
      }
      static resetCache() {
        sysLocaleCache2 = null;
        intlDTCache2 = {};
        intlNumCache2 = {};
        intlRelCache2 = {};
      }
      static fromObject({ locale, numberingSystem, outputCalendar } = {}) {
        return Locale2.create(locale, numberingSystem, outputCalendar);
      }
      constructor(locale, numbering, outputCalendar, specifiedLocale) {
        const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString2(locale);
        this.locale = parsedLocale;
        this.numberingSystem = numbering || parsedNumberingSystem || null;
        this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
        this.intl = intlConfigString2(this.locale, this.numberingSystem, this.outputCalendar);
        this.weekdaysCache = { format: {}, standalone: {} };
        this.monthsCache = { format: {}, standalone: {} };
        this.meridiemCache = null;
        this.eraCache = {};
        this.specifiedLocale = specifiedLocale;
        this.fastNumbersCached = null;
      }
      get fastNumbers() {
        if (this.fastNumbersCached == null) {
          this.fastNumbersCached = supportsFastNumbers2(this);
        }
        return this.fastNumbersCached;
      }
      listingMode() {
        const isActuallyEn = this.isEnglish();
        const hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
        return isActuallyEn && hasNoWeirdness ? "en" : "intl";
      }
      clone(alts) {
        if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
          return this;
        } else {
          return Locale2.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
        }
      }
      redefaultToEN(alts = {}) {
        return this.clone({ ...alts, defaultToEN: true });
      }
      redefaultToSystem(alts = {}) {
        return this.clone({ ...alts, defaultToEN: false });
      }
      months(length, format = false) {
        return listStuff2(this, length, months2, () => {
          const intl = format ? { month: length, day: "numeric" } : { month: length }, formatStr = format ? "format" : "standalone";
          if (!this.monthsCache[formatStr][length]) {
            this.monthsCache[formatStr][length] = mapMonths2((dt) => this.extract(dt, intl, "month"));
          }
          return this.monthsCache[formatStr][length];
        });
      }
      weekdays(length, format = false) {
        return listStuff2(this, length, weekdays2, () => {
          const intl = format ? { weekday: length, year: "numeric", month: "long", day: "numeric" } : { weekday: length }, formatStr = format ? "format" : "standalone";
          if (!this.weekdaysCache[formatStr][length]) {
            this.weekdaysCache[formatStr][length] = mapWeekdays2((dt) => this.extract(dt, intl, "weekday"));
          }
          return this.weekdaysCache[formatStr][length];
        });
      }
      meridiems() {
        return listStuff2(this, void 0, () => meridiems2, () => {
          if (!this.meridiemCache) {
            const intl = { hour: "numeric", hourCycle: "h12" };
            this.meridiemCache = [DateTime2.utc(2016, 11, 13, 9), DateTime2.utc(2016, 11, 13, 19)].map((dt) => this.extract(dt, intl, "dayperiod"));
          }
          return this.meridiemCache;
        });
      }
      eras(length) {
        return listStuff2(this, length, eras2, () => {
          const intl = { era: length };
          if (!this.eraCache[length]) {
            this.eraCache[length] = [DateTime2.utc(-40, 1, 1), DateTime2.utc(2017, 1, 1)].map((dt) => this.extract(dt, intl, "era"));
          }
          return this.eraCache[length];
        });
      }
      extract(dt, intlOpts, field) {
        const df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find((m) => m.type.toLowerCase() === field);
        return matching ? matching.value : null;
      }
      numberFormatter(opts = {}) {
        return new PolyNumberFormatter2(this.intl, opts.forceSimple || this.fastNumbers, opts);
      }
      dtFormatter(dt, intlOpts = {}) {
        return new PolyDateFormatter2(dt, this.intl, intlOpts);
      }
      relFormatter(opts = {}) {
        return new PolyRelFormatter2(this.intl, this.isEnglish(), opts);
      }
      listFormatter(opts = {}) {
        return getCachedLF2(this.intl, opts);
      }
      isEnglish() {
        return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
      }
      equals(other) {
        return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
      }
    };
    var singleton3 = null;
    var FixedOffsetZone2 = class extends Zone2 {
      static get utcInstance() {
        if (singleton3 === null) {
          singleton3 = new FixedOffsetZone2(0);
        }
        return singleton3;
      }
      static instance(offset3) {
        return offset3 === 0 ? FixedOffsetZone2.utcInstance : new FixedOffsetZone2(offset3);
      }
      static parseSpecifier(s3) {
        if (s3) {
          const r = s3.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
          if (r) {
            return new FixedOffsetZone2(signedOffset2(r[1], r[2]));
          }
        }
        return null;
      }
      constructor(offset3) {
        super();
        this.fixed = offset3;
      }
      get type() {
        return "fixed";
      }
      get name() {
        return this.fixed === 0 ? "UTC" : `UTC${formatOffset2(this.fixed, "narrow")}`;
      }
      get ianaName() {
        if (this.fixed === 0) {
          return "Etc/UTC";
        } else {
          return `Etc/GMT${formatOffset2(-this.fixed, "narrow")}`;
        }
      }
      offsetName() {
        return this.name;
      }
      formatOffset(ts, format) {
        return formatOffset2(this.fixed, format);
      }
      get isUniversal() {
        return true;
      }
      offset() {
        return this.fixed;
      }
      equals(otherZone) {
        return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
      }
      get isValid() {
        return true;
      }
    };
    var InvalidZone2 = class extends Zone2 {
      constructor(zoneName) {
        super();
        this.zoneName = zoneName;
      }
      get type() {
        return "invalid";
      }
      get name() {
        return this.zoneName;
      }
      get isUniversal() {
        return false;
      }
      offsetName() {
        return null;
      }
      formatOffset() {
        return "";
      }
      offset() {
        return NaN;
      }
      equals() {
        return false;
      }
      get isValid() {
        return false;
      }
    };
    function normalizeZone2(input, defaultZone3) {
      if (isUndefined2(input) || input === null) {
        return defaultZone3;
      } else if (input instanceof Zone2) {
        return input;
      } else if (isString2(input)) {
        const lowered = input.toLowerCase();
        if (lowered === "default")
          return defaultZone3;
        else if (lowered === "local" || lowered === "system")
          return SystemZone2.instance;
        else if (lowered === "utc" || lowered === "gmt")
          return FixedOffsetZone2.utcInstance;
        else
          return FixedOffsetZone2.parseSpecifier(lowered) || IANAZone2.create(input);
      } else if (isNumber2(input)) {
        return FixedOffsetZone2.instance(input);
      } else if (typeof input === "object" && "offset" in input && typeof input.offset === "function") {
        return input;
      } else {
        return new InvalidZone2(input);
      }
    }
    var now2 = () => Date.now();
    var defaultZone2 = "system";
    var defaultLocale2 = null;
    var defaultNumberingSystem2 = null;
    var defaultOutputCalendar2 = null;
    var twoDigitCutoffYear = 60;
    var throwOnInvalid2;
    var Settings2 = class {
      static get now() {
        return now2;
      }
      static set now(n3) {
        now2 = n3;
      }
      static set defaultZone(zone) {
        defaultZone2 = zone;
      }
      static get defaultZone() {
        return normalizeZone2(defaultZone2, SystemZone2.instance);
      }
      static get defaultLocale() {
        return defaultLocale2;
      }
      static set defaultLocale(locale) {
        defaultLocale2 = locale;
      }
      static get defaultNumberingSystem() {
        return defaultNumberingSystem2;
      }
      static set defaultNumberingSystem(numberingSystem) {
        defaultNumberingSystem2 = numberingSystem;
      }
      static get defaultOutputCalendar() {
        return defaultOutputCalendar2;
      }
      static set defaultOutputCalendar(outputCalendar) {
        defaultOutputCalendar2 = outputCalendar;
      }
      static get twoDigitCutoffYear() {
        return twoDigitCutoffYear;
      }
      static set twoDigitCutoffYear(cutoffYear) {
        twoDigitCutoffYear = cutoffYear % 100;
      }
      static get throwOnInvalid() {
        return throwOnInvalid2;
      }
      static set throwOnInvalid(t) {
        throwOnInvalid2 = t;
      }
      static resetCaches() {
        Locale2.resetCache();
        IANAZone2.resetCache();
      }
    };
    function isUndefined2(o) {
      return typeof o === "undefined";
    }
    function isNumber2(o) {
      return typeof o === "number";
    }
    function isInteger2(o) {
      return typeof o === "number" && o % 1 === 0;
    }
    function isString2(o) {
      return typeof o === "string";
    }
    function isDate2(o) {
      return Object.prototype.toString.call(o) === "[object Date]";
    }
    function hasRelative2() {
      try {
        return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
      } catch (e) {
        return false;
      }
    }
    function maybeArray2(thing) {
      return Array.isArray(thing) ? thing : [thing];
    }
    function bestBy2(arr, by, compare) {
      if (arr.length === 0) {
        return void 0;
      }
      return arr.reduce((best, next) => {
        const pair = [by(next), next];
        if (!best) {
          return pair;
        } else if (compare(best[0], pair[0]) === best[0]) {
          return best;
        } else {
          return pair;
        }
      }, null)[1];
    }
    function pick2(obj, keys) {
      return keys.reduce((a, k) => {
        a[k] = obj[k];
        return a;
      }, {});
    }
    function hasOwnProperty2(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    function integerBetween2(thing, bottom, top) {
      return isInteger2(thing) && thing >= bottom && thing <= top;
    }
    function floorMod2(x, n3) {
      return x - n3 * Math.floor(x / n3);
    }
    function padStart2(input, n3 = 2) {
      const isNeg = input < 0;
      let padded;
      if (isNeg) {
        padded = "-" + ("" + -input).padStart(n3, "0");
      } else {
        padded = ("" + input).padStart(n3, "0");
      }
      return padded;
    }
    function parseInteger2(string) {
      if (isUndefined2(string) || string === null || string === "") {
        return void 0;
      } else {
        return parseInt(string, 10);
      }
    }
    function parseFloating2(string) {
      if (isUndefined2(string) || string === null || string === "") {
        return void 0;
      } else {
        return parseFloat(string);
      }
    }
    function parseMillis2(fraction) {
      if (isUndefined2(fraction) || fraction === null || fraction === "") {
        return void 0;
      } else {
        const f = parseFloat("0." + fraction) * 1e3;
        return Math.floor(f);
      }
    }
    function roundTo2(number, digits, towardZero = false) {
      const factor = 10 ** digits, rounder = towardZero ? Math.trunc : Math.round;
      return rounder(number * factor) / factor;
    }
    function isLeapYear2(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    function daysInYear2(year) {
      return isLeapYear2(year) ? 366 : 365;
    }
    function daysInMonth2(year, month) {
      const modMonth = floorMod2(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
      if (modMonth === 2) {
        return isLeapYear2(modYear) ? 29 : 28;
      } else {
        return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
      }
    }
    function objToLocalTS2(obj) {
      let d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);
      if (obj.year < 100 && obj.year >= 0) {
        d = new Date(d);
        d.setUTCFullYear(obj.year, obj.month - 1, obj.day);
      }
      return +d;
    }
    function weeksInWeekYear2(weekYear) {
      const p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7, last = weekYear - 1, p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
      return p1 === 4 || p2 === 3 ? 53 : 52;
    }
    function untruncateYear2(year) {
      if (year > 99) {
        return year;
      } else
        return year > Settings2.twoDigitCutoffYear ? 1900 + year : 2e3 + year;
    }
    function parseZoneInfo2(ts, offsetFormat, locale, timeZone = null) {
      const date = new Date(ts), intlOpts = {
        hourCycle: "h23",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      };
      if (timeZone) {
        intlOpts.timeZone = timeZone;
      }
      const modified = { timeZoneName: offsetFormat, ...intlOpts };
      const parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find((m) => m.type.toLowerCase() === "timezonename");
      return parsed ? parsed.value : null;
    }
    function signedOffset2(offHourStr, offMinuteStr) {
      let offHour = parseInt(offHourStr, 10);
      if (Number.isNaN(offHour)) {
        offHour = 0;
      }
      const offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
      return offHour * 60 + offMinSigned;
    }
    function asNumber2(value) {
      const numericValue = Number(value);
      if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
        throw new InvalidArgumentError2(`Invalid unit value ${value}`);
      return numericValue;
    }
    function normalizeObject2(obj, normalizer) {
      const normalized = {};
      for (const u in obj) {
        if (hasOwnProperty2(obj, u)) {
          const v = obj[u];
          if (v === void 0 || v === null)
            continue;
          normalized[normalizer(u)] = asNumber2(v);
        }
      }
      return normalized;
    }
    function formatOffset2(offset3, format) {
      const hours = Math.trunc(Math.abs(offset3 / 60)), minutes = Math.trunc(Math.abs(offset3 % 60)), sign = offset3 >= 0 ? "+" : "-";
      switch (format) {
        case "short":
          return `${sign}${padStart2(hours, 2)}:${padStart2(minutes, 2)}`;
        case "narrow":
          return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
        case "techie":
          return `${sign}${padStart2(hours, 2)}${padStart2(minutes, 2)}`;
        default:
          throw new RangeError(`Value format ${format} is out of range for property format`);
      }
    }
    function timeObject2(obj) {
      return pick2(obj, ["hour", "minute", "second", "millisecond"]);
    }
    var monthsLong2 = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var monthsShort2 = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    var monthsNarrow2 = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    function months2(length) {
      switch (length) {
        case "narrow":
          return [...monthsNarrow2];
        case "short":
          return [...monthsShort2];
        case "long":
          return [...monthsLong2];
        case "numeric":
          return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        case "2-digit":
          return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        default:
          return null;
      }
    }
    var weekdaysLong2 = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];
    var weekdaysShort2 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    var weekdaysNarrow2 = ["M", "T", "W", "T", "F", "S", "S"];
    function weekdays2(length) {
      switch (length) {
        case "narrow":
          return [...weekdaysNarrow2];
        case "short":
          return [...weekdaysShort2];
        case "long":
          return [...weekdaysLong2];
        case "numeric":
          return ["1", "2", "3", "4", "5", "6", "7"];
        default:
          return null;
      }
    }
    var meridiems2 = ["AM", "PM"];
    var erasLong2 = ["Before Christ", "Anno Domini"];
    var erasShort2 = ["BC", "AD"];
    var erasNarrow2 = ["B", "A"];
    function eras2(length) {
      switch (length) {
        case "narrow":
          return [...erasNarrow2];
        case "short":
          return [...erasShort2];
        case "long":
          return [...erasLong2];
        default:
          return null;
      }
    }
    function meridiemForDateTime2(dt) {
      return meridiems2[dt.hour < 12 ? 0 : 1];
    }
    function weekdayForDateTime2(dt, length) {
      return weekdays2(length)[dt.weekday - 1];
    }
    function monthForDateTime2(dt, length) {
      return months2(length)[dt.month - 1];
    }
    function eraForDateTime2(dt, length) {
      return eras2(length)[dt.year < 0 ? 0 : 1];
    }
    function formatRelativeTime2(unit, count, numeric = "always", narrow = false) {
      const units = {
        years: ["year", "yr."],
        quarters: ["quarter", "qtr."],
        months: ["month", "mo."],
        weeks: ["week", "wk."],
        days: ["day", "day", "days"],
        hours: ["hour", "hr."],
        minutes: ["minute", "min."],
        seconds: ["second", "sec."]
      };
      const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;
      if (numeric === "auto" && lastable) {
        const isDay = unit === "days";
        switch (count) {
          case 1:
            return isDay ? "tomorrow" : `next ${units[unit][0]}`;
          case -1:
            return isDay ? "yesterday" : `last ${units[unit][0]}`;
          case 0:
            return isDay ? "today" : `this ${units[unit][0]}`;
        }
      }
      const isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
      return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
    }
    function stringifyTokens2(splits, tokenToString) {
      let s3 = "";
      for (const token of splits) {
        if (token.literal) {
          s3 += token.val;
        } else {
          s3 += tokenToString(token.val);
        }
      }
      return s3;
    }
    var macroTokenToFormatOpts2 = {
      D: DATE_SHORT2,
      DD: DATE_MED2,
      DDD: DATE_FULL2,
      DDDD: DATE_HUGE2,
      t: TIME_SIMPLE2,
      tt: TIME_WITH_SECONDS2,
      ttt: TIME_WITH_SHORT_OFFSET2,
      tttt: TIME_WITH_LONG_OFFSET2,
      T: TIME_24_SIMPLE2,
      TT: TIME_24_WITH_SECONDS2,
      TTT: TIME_24_WITH_SHORT_OFFSET2,
      TTTT: TIME_24_WITH_LONG_OFFSET2,
      f: DATETIME_SHORT2,
      ff: DATETIME_MED2,
      fff: DATETIME_FULL2,
      ffff: DATETIME_HUGE2,
      F: DATETIME_SHORT_WITH_SECONDS2,
      FF: DATETIME_MED_WITH_SECONDS2,
      FFF: DATETIME_FULL_WITH_SECONDS2,
      FFFF: DATETIME_HUGE_WITH_SECONDS2
    };
    var Formatter2 = class {
      static create(locale, opts = {}) {
        return new Formatter2(locale, opts);
      }
      static parseFormat(fmt) {
        let current = null, currentFull = "", bracketed = false;
        const splits = [];
        for (let i = 0; i < fmt.length; i++) {
          const c = fmt.charAt(i);
          if (c === "'") {
            if (currentFull.length > 0) {
              splits.push({ literal: bracketed || /^\s+$/.test(currentFull), val: currentFull });
            }
            current = null;
            currentFull = "";
            bracketed = !bracketed;
          } else if (bracketed) {
            currentFull += c;
          } else if (c === current) {
            currentFull += c;
          } else {
            if (currentFull.length > 0) {
              splits.push({ literal: /^\s+$/.test(currentFull), val: currentFull });
            }
            currentFull = c;
            current = c;
          }
        }
        if (currentFull.length > 0) {
          splits.push({ literal: bracketed || /^\s+$/.test(currentFull), val: currentFull });
        }
        return splits;
      }
      static macroTokenToFormatOpts(token) {
        return macroTokenToFormatOpts2[token];
      }
      constructor(locale, formatOpts) {
        this.opts = formatOpts;
        this.loc = locale;
        this.systemLoc = null;
      }
      formatWithSystemDefault(dt, opts) {
        if (this.systemLoc === null) {
          this.systemLoc = this.loc.redefaultToSystem();
        }
        const df = this.systemLoc.dtFormatter(dt, { ...this.opts, ...opts });
        return df.format();
      }
      dtFormatter(dt, opts = {}) {
        return this.loc.dtFormatter(dt, { ...this.opts, ...opts });
      }
      formatDateTime(dt, opts) {
        return this.dtFormatter(dt, opts).format();
      }
      formatDateTimeParts(dt, opts) {
        return this.dtFormatter(dt, opts).formatToParts();
      }
      formatInterval(interval, opts) {
        const df = this.dtFormatter(interval.start, opts);
        return df.dtf.formatRange(interval.start.toJSDate(), interval.end.toJSDate());
      }
      resolvedOptions(dt, opts) {
        return this.dtFormatter(dt, opts).resolvedOptions();
      }
      num(n3, p = 0) {
        if (this.opts.forceSimple) {
          return padStart2(n3, p);
        }
        const opts = { ...this.opts };
        if (p > 0) {
          opts.padTo = p;
        }
        return this.loc.numberFormatter(opts).format(n3);
      }
      formatDateTimeFromString(dt, fmt) {
        const knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = (opts, extract) => this.loc.extract(dt, opts, extract), formatOffset3 = (opts) => {
          if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
            return "Z";
          }
          return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
        }, meridiem = () => knownEnglish ? meridiemForDateTime2(dt) : string({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), month = (length, standalone) => knownEnglish ? monthForDateTime2(dt, length) : string(standalone ? { month: length } : { month: length, day: "numeric" }, "month"), weekday = (length, standalone) => knownEnglish ? weekdayForDateTime2(dt, length) : string(standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" }, "weekday"), maybeMacro = (token) => {
          const formatOpts = Formatter2.macroTokenToFormatOpts(token);
          if (formatOpts) {
            return this.formatWithSystemDefault(dt, formatOpts);
          } else {
            return token;
          }
        }, era = (length) => knownEnglish ? eraForDateTime2(dt, length) : string({ era: length }, "era"), tokenToString = (token) => {
          switch (token) {
            case "S":
              return this.num(dt.millisecond);
            case "u":
            case "SSS":
              return this.num(dt.millisecond, 3);
            case "s":
              return this.num(dt.second);
            case "ss":
              return this.num(dt.second, 2);
            case "uu":
              return this.num(Math.floor(dt.millisecond / 10), 2);
            case "uuu":
              return this.num(Math.floor(dt.millisecond / 100));
            case "m":
              return this.num(dt.minute);
            case "mm":
              return this.num(dt.minute, 2);
            case "h":
              return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
            case "hh":
              return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
            case "H":
              return this.num(dt.hour);
            case "HH":
              return this.num(dt.hour, 2);
            case "Z":
              return formatOffset3({ format: "narrow", allowZ: this.opts.allowZ });
            case "ZZ":
              return formatOffset3({ format: "short", allowZ: this.opts.allowZ });
            case "ZZZ":
              return formatOffset3({ format: "techie", allowZ: this.opts.allowZ });
            case "ZZZZ":
              return dt.zone.offsetName(dt.ts, { format: "short", locale: this.loc.locale });
            case "ZZZZZ":
              return dt.zone.offsetName(dt.ts, { format: "long", locale: this.loc.locale });
            case "z":
              return dt.zoneName;
            case "a":
              return meridiem();
            case "d":
              return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt.day);
            case "dd":
              return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt.day, 2);
            case "c":
              return this.num(dt.weekday);
            case "ccc":
              return weekday("short", true);
            case "cccc":
              return weekday("long", true);
            case "ccccc":
              return weekday("narrow", true);
            case "E":
              return this.num(dt.weekday);
            case "EEE":
              return weekday("short", false);
            case "EEEE":
              return weekday("long", false);
            case "EEEEE":
              return weekday("narrow", false);
            case "L":
              return useDateTimeFormatter ? string({ month: "numeric", day: "numeric" }, "month") : this.num(dt.month);
            case "LL":
              return useDateTimeFormatter ? string({ month: "2-digit", day: "numeric" }, "month") : this.num(dt.month, 2);
            case "LLL":
              return month("short", true);
            case "LLLL":
              return month("long", true);
            case "LLLLL":
              return month("narrow", true);
            case "M":
              return useDateTimeFormatter ? string({ month: "numeric" }, "month") : this.num(dt.month);
            case "MM":
              return useDateTimeFormatter ? string({ month: "2-digit" }, "month") : this.num(dt.month, 2);
            case "MMM":
              return month("short", false);
            case "MMMM":
              return month("long", false);
            case "MMMMM":
              return month("narrow", false);
            case "y":
              return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year);
            case "yy":
              return useDateTimeFormatter ? string({ year: "2-digit" }, "year") : this.num(dt.year.toString().slice(-2), 2);
            case "yyyy":
              return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 4);
            case "yyyyyy":
              return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 6);
            case "G":
              return era("short");
            case "GG":
              return era("long");
            case "GGGGG":
              return era("narrow");
            case "kk":
              return this.num(dt.weekYear.toString().slice(-2), 2);
            case "kkkk":
              return this.num(dt.weekYear, 4);
            case "W":
              return this.num(dt.weekNumber);
            case "WW":
              return this.num(dt.weekNumber, 2);
            case "o":
              return this.num(dt.ordinal);
            case "ooo":
              return this.num(dt.ordinal, 3);
            case "q":
              return this.num(dt.quarter);
            case "qq":
              return this.num(dt.quarter, 2);
            case "X":
              return this.num(Math.floor(dt.ts / 1e3));
            case "x":
              return this.num(dt.ts);
            default:
              return maybeMacro(token);
          }
        };
        return stringifyTokens2(Formatter2.parseFormat(fmt), tokenToString);
      }
      formatDurationFromString(dur, fmt) {
        const tokenToField = (token) => {
          switch (token[0]) {
            case "S":
              return "millisecond";
            case "s":
              return "second";
            case "m":
              return "minute";
            case "h":
              return "hour";
            case "d":
              return "day";
            case "w":
              return "week";
            case "M":
              return "month";
            case "y":
              return "year";
            default:
              return null;
          }
        }, tokenToString = (lildur) => (token) => {
          const mapped = tokenToField(token);
          if (mapped) {
            return this.num(lildur.get(mapped), token.length);
          } else {
            return token;
          }
        }, tokens = Formatter2.parseFormat(fmt), realTokens = tokens.reduce((found, { literal, val }) => literal ? found : found.concat(val), []), collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t) => t));
        return stringifyTokens2(tokens, tokenToString(collapsed));
      }
    };
    var Invalid2 = class {
      constructor(reason, explanation) {
        this.reason = reason;
        this.explanation = explanation;
      }
      toMessage() {
        if (this.explanation) {
          return `${this.reason}: ${this.explanation}`;
        } else {
          return this.reason;
        }
      }
    };
    var ianaRegex2 = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
    function combineRegexes2(...regexes) {
      const full = regexes.reduce((f, r) => f + r.source, "");
      return RegExp(`^${full}$`);
    }
    function combineExtractors2(...extractors) {
      return (m) => extractors.reduce(([mergedVals, mergedZone, cursor], ex) => {
        const [val, zone, next] = ex(m, cursor);
        return [{ ...mergedVals, ...val }, zone || mergedZone, next];
      }, [{}, null, 1]).slice(0, 2);
    }
    function parse2(s3, ...patterns) {
      if (s3 == null) {
        return [null, null];
      }
      for (const [regex, extractor] of patterns) {
        const m = regex.exec(s3);
        if (m) {
          return extractor(m);
        }
      }
      return [null, null];
    }
    function simpleParse2(...keys) {
      return (match3, cursor) => {
        const ret = {};
        let i;
        for (i = 0; i < keys.length; i++) {
          ret[keys[i]] = parseInteger2(match3[cursor + i]);
        }
        return [ret, null, cursor + i];
      };
    }
    var offsetRegex2 = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
    var isoExtendedZone2 = `(?:${offsetRegex2.source}?(?:\\[(${ianaRegex2.source})\\])?)?`;
    var isoTimeBaseRegex2 = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
    var isoTimeRegex2 = RegExp(`${isoTimeBaseRegex2.source}${isoExtendedZone2}`);
    var isoTimeExtensionRegex2 = RegExp(`(?:T${isoTimeRegex2.source})?`);
    var isoYmdRegex2 = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
    var isoWeekRegex2 = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
    var isoOrdinalRegex2 = /(\d{4})-?(\d{3})/;
    var extractISOWeekData2 = simpleParse2("weekYear", "weekNumber", "weekDay");
    var extractISOOrdinalData2 = simpleParse2("year", "ordinal");
    var sqlYmdRegex2 = /(\d{4})-(\d\d)-(\d\d)/;
    var sqlTimeRegex2 = RegExp(`${isoTimeBaseRegex2.source} ?(?:${offsetRegex2.source}|(${ianaRegex2.source}))?`);
    var sqlTimeExtensionRegex2 = RegExp(`(?: ${sqlTimeRegex2.source})?`);
    function int2(match3, pos, fallback) {
      const m = match3[pos];
      return isUndefined2(m) ? fallback : parseInteger2(m);
    }
    function extractISOYmd2(match3, cursor) {
      const item = {
        year: int2(match3, cursor),
        month: int2(match3, cursor + 1, 1),
        day: int2(match3, cursor + 2, 1)
      };
      return [item, null, cursor + 3];
    }
    function extractISOTime2(match3, cursor) {
      const item = {
        hours: int2(match3, cursor, 0),
        minutes: int2(match3, cursor + 1, 0),
        seconds: int2(match3, cursor + 2, 0),
        milliseconds: parseMillis2(match3[cursor + 3])
      };
      return [item, null, cursor + 4];
    }
    function extractISOOffset2(match3, cursor) {
      const local = !match3[cursor] && !match3[cursor + 1], fullOffset = signedOffset2(match3[cursor + 1], match3[cursor + 2]), zone = local ? null : FixedOffsetZone2.instance(fullOffset);
      return [{}, zone, cursor + 3];
    }
    function extractIANAZone2(match3, cursor) {
      const zone = match3[cursor] ? IANAZone2.create(match3[cursor]) : null;
      return [{}, zone, cursor + 1];
    }
    var isoTimeOnly2 = RegExp(`^T?${isoTimeBaseRegex2.source}$`);
    var isoDuration2 = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
    function extractISODuration2(match3) {
      const [s3, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] = match3;
      const hasNegativePrefix = s3[0] === "-";
      const negativeSeconds = secondStr && secondStr[0] === "-";
      const maybeNegate = (num, force = false) => num !== void 0 && (force || num && hasNegativePrefix) ? -num : num;
      return [
        {
          years: maybeNegate(parseFloating2(yearStr)),
          months: maybeNegate(parseFloating2(monthStr)),
          weeks: maybeNegate(parseFloating2(weekStr)),
          days: maybeNegate(parseFloating2(dayStr)),
          hours: maybeNegate(parseFloating2(hourStr)),
          minutes: maybeNegate(parseFloating2(minuteStr)),
          seconds: maybeNegate(parseFloating2(secondStr), secondStr === "-0"),
          milliseconds: maybeNegate(parseMillis2(millisecondsStr), negativeSeconds)
        }
      ];
    }
    var obsOffsets2 = {
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60
    };
    function fromStrings2(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
      const result = {
        year: yearStr.length === 2 ? untruncateYear2(parseInteger2(yearStr)) : parseInteger2(yearStr),
        month: monthsShort2.indexOf(monthStr) + 1,
        day: parseInteger2(dayStr),
        hour: parseInteger2(hourStr),
        minute: parseInteger2(minuteStr)
      };
      if (secondStr)
        result.second = parseInteger2(secondStr);
      if (weekdayStr) {
        result.weekday = weekdayStr.length > 3 ? weekdaysLong2.indexOf(weekdayStr) + 1 : weekdaysShort2.indexOf(weekdayStr) + 1;
      }
      return result;
    }
    var rfc28222 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
    function extractRFC28222(match3) {
      const [
        ,
        weekdayStr,
        dayStr,
        monthStr,
        yearStr,
        hourStr,
        minuteStr,
        secondStr,
        obsOffset,
        milOffset,
        offHourStr,
        offMinuteStr
      ] = match3, result = fromStrings2(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
      let offset3;
      if (obsOffset) {
        offset3 = obsOffsets2[obsOffset];
      } else if (milOffset) {
        offset3 = 0;
      } else {
        offset3 = signedOffset2(offHourStr, offMinuteStr);
      }
      return [result, new FixedOffsetZone2(offset3)];
    }
    function preprocessRFC28222(s3) {
      return s3.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
    }
    var rfc11232 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
    var rfc8502 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
    var ascii2 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
    function extractRFC1123Or8502(match3) {
      const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match3, result = fromStrings2(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
      return [result, FixedOffsetZone2.utcInstance];
    }
    function extractASCII2(match3) {
      const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match3, result = fromStrings2(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
      return [result, FixedOffsetZone2.utcInstance];
    }
    var isoYmdWithTimeExtensionRegex2 = combineRegexes2(isoYmdRegex2, isoTimeExtensionRegex2);
    var isoWeekWithTimeExtensionRegex2 = combineRegexes2(isoWeekRegex2, isoTimeExtensionRegex2);
    var isoOrdinalWithTimeExtensionRegex2 = combineRegexes2(isoOrdinalRegex2, isoTimeExtensionRegex2);
    var isoTimeCombinedRegex2 = combineRegexes2(isoTimeRegex2);
    var extractISOYmdTimeAndOffset2 = combineExtractors2(extractISOYmd2, extractISOTime2, extractISOOffset2, extractIANAZone2);
    var extractISOWeekTimeAndOffset2 = combineExtractors2(extractISOWeekData2, extractISOTime2, extractISOOffset2, extractIANAZone2);
    var extractISOOrdinalDateAndTime2 = combineExtractors2(extractISOOrdinalData2, extractISOTime2, extractISOOffset2, extractIANAZone2);
    var extractISOTimeAndOffset2 = combineExtractors2(extractISOTime2, extractISOOffset2, extractIANAZone2);
    function parseISODate2(s3) {
      return parse2(s3, [isoYmdWithTimeExtensionRegex2, extractISOYmdTimeAndOffset2], [isoWeekWithTimeExtensionRegex2, extractISOWeekTimeAndOffset2], [isoOrdinalWithTimeExtensionRegex2, extractISOOrdinalDateAndTime2], [isoTimeCombinedRegex2, extractISOTimeAndOffset2]);
    }
    function parseRFC2822Date2(s3) {
      return parse2(preprocessRFC28222(s3), [rfc28222, extractRFC28222]);
    }
    function parseHTTPDate2(s3) {
      return parse2(s3, [rfc11232, extractRFC1123Or8502], [rfc8502, extractRFC1123Or8502], [ascii2, extractASCII2]);
    }
    function parseISODuration2(s3) {
      return parse2(s3, [isoDuration2, extractISODuration2]);
    }
    var extractISOTimeOnly2 = combineExtractors2(extractISOTime2);
    function parseISOTimeOnly2(s3) {
      return parse2(s3, [isoTimeOnly2, extractISOTimeOnly2]);
    }
    var sqlYmdWithTimeExtensionRegex2 = combineRegexes2(sqlYmdRegex2, sqlTimeExtensionRegex2);
    var sqlTimeCombinedRegex2 = combineRegexes2(sqlTimeRegex2);
    var extractISOTimeOffsetAndIANAZone2 = combineExtractors2(extractISOTime2, extractISOOffset2, extractIANAZone2);
    function parseSQL2(s3) {
      return parse2(s3, [sqlYmdWithTimeExtensionRegex2, extractISOYmdTimeAndOffset2], [sqlTimeCombinedRegex2, extractISOTimeOffsetAndIANAZone2]);
    }
    var INVALID$2 = "Invalid Duration";
    var lowOrderMatrix2 = {
      weeks: {
        days: 7,
        hours: 7 * 24,
        minutes: 7 * 24 * 60,
        seconds: 7 * 24 * 60 * 60,
        milliseconds: 7 * 24 * 60 * 60 * 1e3
      },
      days: {
        hours: 24,
        minutes: 24 * 60,
        seconds: 24 * 60 * 60,
        milliseconds: 24 * 60 * 60 * 1e3
      },
      hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
      minutes: { seconds: 60, milliseconds: 60 * 1e3 },
      seconds: { milliseconds: 1e3 }
    };
    var casualMatrix2 = {
      years: {
        quarters: 4,
        months: 12,
        weeks: 52,
        days: 365,
        hours: 365 * 24,
        minutes: 365 * 24 * 60,
        seconds: 365 * 24 * 60 * 60,
        milliseconds: 365 * 24 * 60 * 60 * 1e3
      },
      quarters: {
        months: 3,
        weeks: 13,
        days: 91,
        hours: 91 * 24,
        minutes: 91 * 24 * 60,
        seconds: 91 * 24 * 60 * 60,
        milliseconds: 91 * 24 * 60 * 60 * 1e3
      },
      months: {
        weeks: 4,
        days: 30,
        hours: 30 * 24,
        minutes: 30 * 24 * 60,
        seconds: 30 * 24 * 60 * 60,
        milliseconds: 30 * 24 * 60 * 60 * 1e3
      },
      ...lowOrderMatrix2
    };
    var daysInYearAccurate2 = 146097 / 400;
    var daysInMonthAccurate2 = 146097 / 4800;
    var accurateMatrix2 = {
      years: {
        quarters: 4,
        months: 12,
        weeks: daysInYearAccurate2 / 7,
        days: daysInYearAccurate2,
        hours: daysInYearAccurate2 * 24,
        minutes: daysInYearAccurate2 * 24 * 60,
        seconds: daysInYearAccurate2 * 24 * 60 * 60,
        milliseconds: daysInYearAccurate2 * 24 * 60 * 60 * 1e3
      },
      quarters: {
        months: 3,
        weeks: daysInYearAccurate2 / 28,
        days: daysInYearAccurate2 / 4,
        hours: daysInYearAccurate2 * 24 / 4,
        minutes: daysInYearAccurate2 * 24 * 60 / 4,
        seconds: daysInYearAccurate2 * 24 * 60 * 60 / 4,
        milliseconds: daysInYearAccurate2 * 24 * 60 * 60 * 1e3 / 4
      },
      months: {
        weeks: daysInMonthAccurate2 / 7,
        days: daysInMonthAccurate2,
        hours: daysInMonthAccurate2 * 24,
        minutes: daysInMonthAccurate2 * 24 * 60,
        seconds: daysInMonthAccurate2 * 24 * 60 * 60,
        milliseconds: daysInMonthAccurate2 * 24 * 60 * 60 * 1e3
      },
      ...lowOrderMatrix2
    };
    var orderedUnits$1 = [
      "years",
      "quarters",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    ];
    var reverseUnits2 = orderedUnits$1.slice(0).reverse();
    function clone$1(dur, alts, clear = false) {
      const conf = {
        values: clear ? alts.values : { ...dur.values, ...alts.values || {} },
        loc: dur.loc.clone(alts.loc),
        conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
        matrix: alts.matrix || dur.matrix
      };
      return new Duration2(conf);
    }
    function durationToMillis(matrix, vals) {
      var _a;
      let sum = (_a = vals.milliseconds) != null ? _a : 0;
      for (const unit of reverseUnits2.slice(1)) {
        if (vals[unit]) {
          sum += vals[unit] * matrix[unit]["milliseconds"];
        }
      }
      return sum;
    }
    function normalizeValues2(matrix, vals) {
      const factor = durationToMillis(matrix, vals) < 0 ? -1 : 1;
      orderedUnits$1.reduceRight((previous, current) => {
        if (!isUndefined2(vals[current])) {
          if (previous) {
            const previousVal = vals[previous] * factor;
            const conv = matrix[current][previous];
            const rollUp = Math.floor(previousVal / conv);
            vals[current] += rollUp * factor;
            vals[previous] -= rollUp * conv * factor;
          }
          return current;
        } else {
          return previous;
        }
      }, null);
      orderedUnits$1.reduce((previous, current) => {
        if (!isUndefined2(vals[current])) {
          if (previous) {
            const fraction = vals[previous] % 1;
            vals[previous] -= fraction;
            vals[current] += fraction * matrix[previous][current];
          }
          return current;
        } else {
          return previous;
        }
      }, null);
    }
    function removeZeroes2(vals) {
      const newVals = {};
      for (const [key, value] of Object.entries(vals)) {
        if (value !== 0) {
          newVals[key] = value;
        }
      }
      return newVals;
    }
    var Duration2 = class {
      constructor(config) {
        const accurate = config.conversionAccuracy === "longterm" || false;
        let matrix = accurate ? accurateMatrix2 : casualMatrix2;
        if (config.matrix) {
          matrix = config.matrix;
        }
        this.values = config.values;
        this.loc = config.loc || Locale2.create();
        this.conversionAccuracy = accurate ? "longterm" : "casual";
        this.invalid = config.invalid || null;
        this.matrix = matrix;
        this.isLuxonDuration = true;
      }
      static fromMillis(count, opts) {
        return Duration2.fromObject({ milliseconds: count }, opts);
      }
      static fromObject(obj, opts = {}) {
        if (obj == null || typeof obj !== "object") {
          throw new InvalidArgumentError2(`Duration.fromObject: argument expected to be an object, got ${obj === null ? "null" : typeof obj}`);
        }
        return new Duration2({
          values: normalizeObject2(obj, Duration2.normalizeUnit),
          loc: Locale2.fromObject(opts),
          conversionAccuracy: opts.conversionAccuracy,
          matrix: opts.matrix
        });
      }
      static fromDurationLike(durationLike) {
        if (isNumber2(durationLike)) {
          return Duration2.fromMillis(durationLike);
        } else if (Duration2.isDuration(durationLike)) {
          return durationLike;
        } else if (typeof durationLike === "object") {
          return Duration2.fromObject(durationLike);
        } else {
          throw new InvalidArgumentError2(`Unknown duration argument ${durationLike} of type ${typeof durationLike}`);
        }
      }
      static fromISO(text, opts) {
        const [parsed] = parseISODuration2(text);
        if (parsed) {
          return Duration2.fromObject(parsed, opts);
        } else {
          return Duration2.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
        }
      }
      static fromISOTime(text, opts) {
        const [parsed] = parseISOTimeOnly2(text);
        if (parsed) {
          return Duration2.fromObject(parsed, opts);
        } else {
          return Duration2.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
        }
      }
      static invalid(reason, explanation = null) {
        if (!reason) {
          throw new InvalidArgumentError2("need to specify a reason the Duration is invalid");
        }
        const invalid = reason instanceof Invalid2 ? reason : new Invalid2(reason, explanation);
        if (Settings2.throwOnInvalid) {
          throw new InvalidDurationError2(invalid);
        } else {
          return new Duration2({ invalid });
        }
      }
      static normalizeUnit(unit) {
        const normalized = {
          year: "years",
          years: "years",
          quarter: "quarters",
          quarters: "quarters",
          month: "months",
          months: "months",
          week: "weeks",
          weeks: "weeks",
          day: "days",
          days: "days",
          hour: "hours",
          hours: "hours",
          minute: "minutes",
          minutes: "minutes",
          second: "seconds",
          seconds: "seconds",
          millisecond: "milliseconds",
          milliseconds: "milliseconds"
        }[unit ? unit.toLowerCase() : unit];
        if (!normalized)
          throw new InvalidUnitError2(unit);
        return normalized;
      }
      static isDuration(o) {
        return o && o.isLuxonDuration || false;
      }
      get locale() {
        return this.isValid ? this.loc.locale : null;
      }
      get numberingSystem() {
        return this.isValid ? this.loc.numberingSystem : null;
      }
      toFormat(fmt, opts = {}) {
        const fmtOpts = {
          ...opts,
          floor: opts.round !== false && opts.floor !== false
        };
        return this.isValid ? Formatter2.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
      }
      toHuman(opts = {}) {
        if (!this.isValid)
          return INVALID$2;
        const l3 = orderedUnits$1.map((unit) => {
          const val = this.values[unit];
          if (isUndefined2(val)) {
            return null;
          }
          return this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...opts, unit: unit.slice(0, -1) }).format(val);
        }).filter((n3) => n3);
        return this.loc.listFormatter({ type: "conjunction", style: opts.listStyle || "narrow", ...opts }).format(l3);
      }
      toObject() {
        if (!this.isValid)
          return {};
        return { ...this.values };
      }
      toISO() {
        if (!this.isValid)
          return null;
        let s3 = "P";
        if (this.years !== 0)
          s3 += this.years + "Y";
        if (this.months !== 0 || this.quarters !== 0)
          s3 += this.months + this.quarters * 3 + "M";
        if (this.weeks !== 0)
          s3 += this.weeks + "W";
        if (this.days !== 0)
          s3 += this.days + "D";
        if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
          s3 += "T";
        if (this.hours !== 0)
          s3 += this.hours + "H";
        if (this.minutes !== 0)
          s3 += this.minutes + "M";
        if (this.seconds !== 0 || this.milliseconds !== 0)
          s3 += roundTo2(this.seconds + this.milliseconds / 1e3, 3) + "S";
        if (s3 === "P")
          s3 += "T0S";
        return s3;
      }
      toISOTime(opts = {}) {
        if (!this.isValid)
          return null;
        const millis = this.toMillis();
        if (millis < 0 || millis >= 864e5)
          return null;
        opts = {
          suppressMilliseconds: false,
          suppressSeconds: false,
          includePrefix: false,
          format: "extended",
          ...opts,
          includeOffset: false
        };
        const dateTime = DateTime2.fromMillis(millis, { zone: "UTC" });
        return dateTime.toISOTime(opts);
      }
      toJSON() {
        return this.toISO();
      }
      toString() {
        return this.toISO();
      }
      toMillis() {
        if (!this.isValid)
          return NaN;
        return durationToMillis(this.matrix, this.values);
      }
      valueOf() {
        return this.toMillis();
      }
      plus(duration) {
        if (!this.isValid)
          return this;
        const dur = Duration2.fromDurationLike(duration), result = {};
        for (const k of orderedUnits$1) {
          if (hasOwnProperty2(dur.values, k) || hasOwnProperty2(this.values, k)) {
            result[k] = dur.get(k) + this.get(k);
          }
        }
        return clone$1(this, { values: result }, true);
      }
      minus(duration) {
        if (!this.isValid)
          return this;
        const dur = Duration2.fromDurationLike(duration);
        return this.plus(dur.negate());
      }
      mapUnits(fn) {
        if (!this.isValid)
          return this;
        const result = {};
        for (const k of Object.keys(this.values)) {
          result[k] = asNumber2(fn(this.values[k], k));
        }
        return clone$1(this, { values: result }, true);
      }
      get(unit) {
        return this[Duration2.normalizeUnit(unit)];
      }
      set(values) {
        if (!this.isValid)
          return this;
        const mixed = { ...this.values, ...normalizeObject2(values, Duration2.normalizeUnit) };
        return clone$1(this, { values: mixed });
      }
      reconfigure({ locale, numberingSystem, conversionAccuracy, matrix } = {}) {
        const loc = this.loc.clone({ locale, numberingSystem });
        const opts = { loc, matrix, conversionAccuracy };
        return clone$1(this, opts);
      }
      as(unit) {
        return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
      }
      normalize() {
        if (!this.isValid)
          return this;
        const vals = this.toObject();
        normalizeValues2(this.matrix, vals);
        return clone$1(this, { values: vals }, true);
      }
      rescale() {
        if (!this.isValid)
          return this;
        const vals = removeZeroes2(this.normalize().shiftToAll().toObject());
        return clone$1(this, { values: vals }, true);
      }
      shiftTo(...units) {
        if (!this.isValid)
          return this;
        if (units.length === 0) {
          return this;
        }
        units = units.map((u) => Duration2.normalizeUnit(u));
        const built = {}, accumulated = {}, vals = this.toObject();
        let lastUnit;
        for (const k of orderedUnits$1) {
          if (units.indexOf(k) >= 0) {
            lastUnit = k;
            let own = 0;
            for (const ak in accumulated) {
              own += this.matrix[ak][k] * accumulated[ak];
              accumulated[ak] = 0;
            }
            if (isNumber2(vals[k])) {
              own += vals[k];
            }
            const i = Math.trunc(own);
            built[k] = i;
            accumulated[k] = (own * 1e3 - i * 1e3) / 1e3;
          } else if (isNumber2(vals[k])) {
            accumulated[k] = vals[k];
          }
        }
        for (const key in accumulated) {
          if (accumulated[key] !== 0) {
            built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
          }
        }
        normalizeValues2(this.matrix, built);
        return clone$1(this, { values: built }, true);
      }
      shiftToAll() {
        if (!this.isValid)
          return this;
        return this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds");
      }
      negate() {
        if (!this.isValid)
          return this;
        const negated = {};
        for (const k of Object.keys(this.values)) {
          negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
        }
        return clone$1(this, { values: negated }, true);
      }
      get years() {
        return this.isValid ? this.values.years || 0 : NaN;
      }
      get quarters() {
        return this.isValid ? this.values.quarters || 0 : NaN;
      }
      get months() {
        return this.isValid ? this.values.months || 0 : NaN;
      }
      get weeks() {
        return this.isValid ? this.values.weeks || 0 : NaN;
      }
      get days() {
        return this.isValid ? this.values.days || 0 : NaN;
      }
      get hours() {
        return this.isValid ? this.values.hours || 0 : NaN;
      }
      get minutes() {
        return this.isValid ? this.values.minutes || 0 : NaN;
      }
      get seconds() {
        return this.isValid ? this.values.seconds || 0 : NaN;
      }
      get milliseconds() {
        return this.isValid ? this.values.milliseconds || 0 : NaN;
      }
      get isValid() {
        return this.invalid === null;
      }
      get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
      }
      get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
      }
      equals(other) {
        if (!this.isValid || !other.isValid) {
          return false;
        }
        if (!this.loc.equals(other.loc)) {
          return false;
        }
        function eq(v1, v2) {
          if (v1 === void 0 || v1 === 0)
            return v2 === void 0 || v2 === 0;
          return v1 === v2;
        }
        for (const u of orderedUnits$1) {
          if (!eq(this.values[u], other.values[u])) {
            return false;
          }
        }
        return true;
      }
    };
    var INVALID$1 = "Invalid Interval";
    function validateStartEnd2(start, end) {
      if (!start || !start.isValid) {
        return Interval2.invalid("missing or invalid start");
      } else if (!end || !end.isValid) {
        return Interval2.invalid("missing or invalid end");
      } else if (end < start) {
        return Interval2.invalid("end before start", `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`);
      } else {
        return null;
      }
    }
    var Interval2 = class {
      constructor(config) {
        this.s = config.start;
        this.e = config.end;
        this.invalid = config.invalid || null;
        this.isLuxonInterval = true;
      }
      static invalid(reason, explanation = null) {
        if (!reason) {
          throw new InvalidArgumentError2("need to specify a reason the Interval is invalid");
        }
        const invalid = reason instanceof Invalid2 ? reason : new Invalid2(reason, explanation);
        if (Settings2.throwOnInvalid) {
          throw new InvalidIntervalError2(invalid);
        } else {
          return new Interval2({ invalid });
        }
      }
      static fromDateTimes(start, end) {
        const builtStart = friendlyDateTime2(start), builtEnd = friendlyDateTime2(end);
        const validateError = validateStartEnd2(builtStart, builtEnd);
        if (validateError == null) {
          return new Interval2({
            start: builtStart,
            end: builtEnd
          });
        } else {
          return validateError;
        }
      }
      static after(start, duration) {
        const dur = Duration2.fromDurationLike(duration), dt = friendlyDateTime2(start);
        return Interval2.fromDateTimes(dt, dt.plus(dur));
      }
      static before(end, duration) {
        const dur = Duration2.fromDurationLike(duration), dt = friendlyDateTime2(end);
        return Interval2.fromDateTimes(dt.minus(dur), dt);
      }
      static fromISO(text, opts) {
        const [s3, e] = (text || "").split("/", 2);
        if (s3 && e) {
          let start, startIsValid;
          try {
            start = DateTime2.fromISO(s3, opts);
            startIsValid = start.isValid;
          } catch (e2) {
            startIsValid = false;
          }
          let end, endIsValid;
          try {
            end = DateTime2.fromISO(e, opts);
            endIsValid = end.isValid;
          } catch (e2) {
            endIsValid = false;
          }
          if (startIsValid && endIsValid) {
            return Interval2.fromDateTimes(start, end);
          }
          if (startIsValid) {
            const dur = Duration2.fromISO(e, opts);
            if (dur.isValid) {
              return Interval2.after(start, dur);
            }
          } else if (endIsValid) {
            const dur = Duration2.fromISO(s3, opts);
            if (dur.isValid) {
              return Interval2.before(end, dur);
            }
          }
        }
        return Interval2.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
      }
      static isInterval(o) {
        return o && o.isLuxonInterval || false;
      }
      get start() {
        return this.isValid ? this.s : null;
      }
      get end() {
        return this.isValid ? this.e : null;
      }
      get isValid() {
        return this.invalidReason === null;
      }
      get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
      }
      get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
      }
      length(unit = "milliseconds") {
        return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
      }
      count(unit = "milliseconds") {
        if (!this.isValid)
          return NaN;
        const start = this.start.startOf(unit), end = this.end.startOf(unit);
        return Math.floor(end.diff(start, unit).get(unit)) + (end.valueOf() !== this.end.valueOf());
      }
      hasSame(unit) {
        return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
      }
      isEmpty() {
        return this.s.valueOf() === this.e.valueOf();
      }
      isAfter(dateTime) {
        if (!this.isValid)
          return false;
        return this.s > dateTime;
      }
      isBefore(dateTime) {
        if (!this.isValid)
          return false;
        return this.e <= dateTime;
      }
      contains(dateTime) {
        if (!this.isValid)
          return false;
        return this.s <= dateTime && this.e > dateTime;
      }
      set({ start, end } = {}) {
        if (!this.isValid)
          return this;
        return Interval2.fromDateTimes(start || this.s, end || this.e);
      }
      splitAt(...dateTimes) {
        if (!this.isValid)
          return [];
        const sorted = dateTimes.map(friendlyDateTime2).filter((d) => this.contains(d)).sort(), results = [];
        let { s: s3 } = this, i = 0;
        while (s3 < this.e) {
          const added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
          results.push(Interval2.fromDateTimes(s3, next));
          s3 = next;
          i += 1;
        }
        return results;
      }
      splitBy(duration) {
        const dur = Duration2.fromDurationLike(duration);
        if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
          return [];
        }
        let { s: s3 } = this, idx = 1, next;
        const results = [];
        while (s3 < this.e) {
          const added = this.start.plus(dur.mapUnits((x) => x * idx));
          next = +added > +this.e ? this.e : added;
          results.push(Interval2.fromDateTimes(s3, next));
          s3 = next;
          idx += 1;
        }
        return results;
      }
      divideEqually(numberOfParts) {
        if (!this.isValid)
          return [];
        return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
      }
      overlaps(other) {
        return this.e > other.s && this.s < other.e;
      }
      abutsStart(other) {
        if (!this.isValid)
          return false;
        return +this.e === +other.s;
      }
      abutsEnd(other) {
        if (!this.isValid)
          return false;
        return +other.e === +this.s;
      }
      engulfs(other) {
        if (!this.isValid)
          return false;
        return this.s <= other.s && this.e >= other.e;
      }
      equals(other) {
        if (!this.isValid || !other.isValid) {
          return false;
        }
        return this.s.equals(other.s) && this.e.equals(other.e);
      }
      intersection(other) {
        if (!this.isValid)
          return this;
        const s3 = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
        if (s3 >= e) {
          return null;
        } else {
          return Interval2.fromDateTimes(s3, e);
        }
      }
      union(other) {
        if (!this.isValid)
          return this;
        const s3 = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
        return Interval2.fromDateTimes(s3, e);
      }
      static merge(intervals) {
        const [found, final] = intervals.sort((a, b) => a.s - b.s).reduce(([sofar, current], item) => {
          if (!current) {
            return [sofar, item];
          } else if (current.overlaps(item) || current.abutsStart(item)) {
            return [sofar, current.union(item)];
          } else {
            return [sofar.concat([current]), item];
          }
        }, [[], null]);
        if (final) {
          found.push(final);
        }
        return found;
      }
      static xor(intervals) {
        let start = null, currentCount = 0;
        const results = [], ends = intervals.map((i) => [
          { time: i.s, type: "s" },
          { time: i.e, type: "e" }
        ]), flattened = Array.prototype.concat(...ends), arr = flattened.sort((a, b) => a.time - b.time);
        for (const i of arr) {
          currentCount += i.type === "s" ? 1 : -1;
          if (currentCount === 1) {
            start = i.time;
          } else {
            if (start && +start !== +i.time) {
              results.push(Interval2.fromDateTimes(start, i.time));
            }
            start = null;
          }
        }
        return Interval2.merge(results);
      }
      difference(...intervals) {
        return Interval2.xor([this].concat(intervals)).map((i) => this.intersection(i)).filter((i) => i && !i.isEmpty());
      }
      toString() {
        if (!this.isValid)
          return INVALID$1;
        return `[${this.s.toISO()} \u2013 ${this.e.toISO()})`;
      }
      toLocaleString(formatOpts = DATE_SHORT2, opts = {}) {
        return this.isValid ? Formatter2.create(this.s.loc.clone(opts), formatOpts).formatInterval(this) : INVALID$1;
      }
      toISO(opts) {
        if (!this.isValid)
          return INVALID$1;
        return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
      }
      toISODate() {
        if (!this.isValid)
          return INVALID$1;
        return `${this.s.toISODate()}/${this.e.toISODate()}`;
      }
      toISOTime(opts) {
        if (!this.isValid)
          return INVALID$1;
        return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
      }
      toFormat(dateFormat, { separator = " \u2013 " } = {}) {
        if (!this.isValid)
          return INVALID$1;
        return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
      }
      toDuration(unit, opts) {
        if (!this.isValid) {
          return Duration2.invalid(this.invalidReason);
        }
        return this.e.diff(this.s, unit, opts);
      }
      mapEndpoints(mapFn) {
        return Interval2.fromDateTimes(mapFn(this.s), mapFn(this.e));
      }
    };
    var Info2 = class {
      static hasDST(zone = Settings2.defaultZone) {
        const proto = DateTime2.now().setZone(zone).set({ month: 12 });
        return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
      }
      static isValidIANAZone(zone) {
        return IANAZone2.isValidZone(zone);
      }
      static normalizeZone(input) {
        return normalizeZone2(input, Settings2.defaultZone);
      }
      static months(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
        return (locObj || Locale2.create(locale, numberingSystem, outputCalendar)).months(length);
      }
      static monthsFormat(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
        return (locObj || Locale2.create(locale, numberingSystem, outputCalendar)).months(length, true);
      }
      static weekdays(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
        return (locObj || Locale2.create(locale, numberingSystem, null)).weekdays(length);
      }
      static weekdaysFormat(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
        return (locObj || Locale2.create(locale, numberingSystem, null)).weekdays(length, true);
      }
      static meridiems({ locale = null } = {}) {
        return Locale2.create(locale).meridiems();
      }
      static eras(length = "short", { locale = null } = {}) {
        return Locale2.create(locale, null, "gregory").eras(length);
      }
      static features() {
        return { relative: hasRelative2() };
      }
    };
    function dayDiff2(earlier, later) {
      const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(), ms = utcDayStart(later) - utcDayStart(earlier);
      return Math.floor(Duration2.fromMillis(ms).as("days"));
    }
    function highOrderDiffs2(cursor, later, units) {
      const differs = [
        ["years", (a, b) => b.year - a.year],
        ["quarters", (a, b) => b.quarter - a.quarter + (b.year - a.year) * 4],
        ["months", (a, b) => b.month - a.month + (b.year - a.year) * 12],
        [
          "weeks",
          (a, b) => {
            const days = dayDiff2(a, b);
            return (days - days % 7) / 7;
          }
        ],
        ["days", dayDiff2]
      ];
      const results = {};
      const earlier = cursor;
      let lowestOrder, highWater;
      for (const [unit, differ] of differs) {
        if (units.indexOf(unit) >= 0) {
          lowestOrder = unit;
          results[unit] = differ(cursor, later);
          highWater = earlier.plus(results);
          if (highWater > later) {
            results[unit]--;
            cursor = earlier.plus(results);
            if (cursor > later) {
              highWater = cursor;
              results[unit]--;
              cursor = earlier.plus(results);
            }
          } else {
            cursor = highWater;
          }
        }
      }
      return [cursor, results, highWater, lowestOrder];
    }
    function diff(earlier, later, units, opts) {
      let [cursor, results, highWater, lowestOrder] = highOrderDiffs2(earlier, later, units);
      const remainingMillis = later - cursor;
      const lowerOrderUnits = units.filter((u) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0);
      if (lowerOrderUnits.length === 0) {
        if (highWater < later) {
          highWater = cursor.plus({ [lowestOrder]: 1 });
        }
        if (highWater !== cursor) {
          results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
        }
      }
      const duration = Duration2.fromObject(results, opts);
      if (lowerOrderUnits.length > 0) {
        return Duration2.fromMillis(remainingMillis, opts).shiftTo(...lowerOrderUnits).plus(duration);
      } else {
        return duration;
      }
    }
    var numberingSystems2 = {
      arab: "[\u0660-\u0669]",
      arabext: "[\u06F0-\u06F9]",
      bali: "[\u1B50-\u1B59]",
      beng: "[\u09E6-\u09EF]",
      deva: "[\u0966-\u096F]",
      fullwide: "[\uFF10-\uFF19]",
      gujr: "[\u0AE6-\u0AEF]",
      hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
      khmr: "[\u17E0-\u17E9]",
      knda: "[\u0CE6-\u0CEF]",
      laoo: "[\u0ED0-\u0ED9]",
      limb: "[\u1946-\u194F]",
      mlym: "[\u0D66-\u0D6F]",
      mong: "[\u1810-\u1819]",
      mymr: "[\u1040-\u1049]",
      orya: "[\u0B66-\u0B6F]",
      tamldec: "[\u0BE6-\u0BEF]",
      telu: "[\u0C66-\u0C6F]",
      thai: "[\u0E50-\u0E59]",
      tibt: "[\u0F20-\u0F29]",
      latn: "\\d"
    };
    var numberingSystemsUTF162 = {
      arab: [1632, 1641],
      arabext: [1776, 1785],
      bali: [6992, 7001],
      beng: [2534, 2543],
      deva: [2406, 2415],
      fullwide: [65296, 65303],
      gujr: [2790, 2799],
      khmr: [6112, 6121],
      knda: [3302, 3311],
      laoo: [3792, 3801],
      limb: [6470, 6479],
      mlym: [3430, 3439],
      mong: [6160, 6169],
      mymr: [4160, 4169],
      orya: [2918, 2927],
      tamldec: [3046, 3055],
      telu: [3174, 3183],
      thai: [3664, 3673],
      tibt: [3872, 3881]
    };
    var hanidecChars2 = numberingSystems2.hanidec.replace(/[\[|\]]/g, "").split("");
    function parseDigits2(str) {
      let value = parseInt(str, 10);
      if (isNaN(value)) {
        value = "";
        for (let i = 0; i < str.length; i++) {
          const code = str.charCodeAt(i);
          if (str[i].search(numberingSystems2.hanidec) !== -1) {
            value += hanidecChars2.indexOf(str[i]);
          } else {
            for (const key in numberingSystemsUTF162) {
              const [min, max] = numberingSystemsUTF162[key];
              if (code >= min && code <= max) {
                value += code - min;
              }
            }
          }
        }
        return parseInt(value, 10);
      } else {
        return value;
      }
    }
    function digitRegex2({ numberingSystem }, append = "") {
      return new RegExp(`${numberingSystems2[numberingSystem || "latn"]}${append}`);
    }
    var MISSING_FTP2 = "missing Intl.DateTimeFormat.formatToParts support";
    function intUnit2(regex, post = (i) => i) {
      return { regex, deser: ([s3]) => post(parseDigits2(s3)) };
    }
    var NBSP2 = String.fromCharCode(160);
    var spaceOrNBSP2 = `[ ${NBSP2}]`;
    var spaceOrNBSPRegExp2 = new RegExp(spaceOrNBSP2, "g");
    function fixListRegex2(s3) {
      return s3.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp2, spaceOrNBSP2);
    }
    function stripInsensitivities2(s3) {
      return s3.replace(/\./g, "").replace(spaceOrNBSPRegExp2, " ").toLowerCase();
    }
    function oneOf2(strings, startIndex) {
      if (strings === null) {
        return null;
      } else {
        return {
          regex: RegExp(strings.map(fixListRegex2).join("|")),
          deser: ([s3]) => strings.findIndex((i) => stripInsensitivities2(s3) === stripInsensitivities2(i)) + startIndex
        };
      }
    }
    function offset2(regex, groups) {
      return { regex, deser: ([, h, m]) => signedOffset2(h, m), groups };
    }
    function simple2(regex) {
      return { regex, deser: ([s3]) => s3 };
    }
    function escapeToken2(value) {
      return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    }
    function unitForToken2(token, loc) {
      const one = digitRegex2(loc), two = digitRegex2(loc, "{2}"), three = digitRegex2(loc, "{3}"), four = digitRegex2(loc, "{4}"), six = digitRegex2(loc, "{6}"), oneOrTwo = digitRegex2(loc, "{1,2}"), oneToThree = digitRegex2(loc, "{1,3}"), oneToSix = digitRegex2(loc, "{1,6}"), oneToNine = digitRegex2(loc, "{1,9}"), twoToFour = digitRegex2(loc, "{2,4}"), fourToSix = digitRegex2(loc, "{4,6}"), literal = (t) => ({ regex: RegExp(escapeToken2(t.val)), deser: ([s3]) => s3, literal: true }), unitate = (t) => {
        if (token.literal) {
          return literal(t);
        }
        switch (t.val) {
          case "G":
            return oneOf2(loc.eras("short"), 0);
          case "GG":
            return oneOf2(loc.eras("long"), 0);
          case "y":
            return intUnit2(oneToSix);
          case "yy":
            return intUnit2(twoToFour, untruncateYear2);
          case "yyyy":
            return intUnit2(four);
          case "yyyyy":
            return intUnit2(fourToSix);
          case "yyyyyy":
            return intUnit2(six);
          case "M":
            return intUnit2(oneOrTwo);
          case "MM":
            return intUnit2(two);
          case "MMM":
            return oneOf2(loc.months("short", true), 1);
          case "MMMM":
            return oneOf2(loc.months("long", true), 1);
          case "L":
            return intUnit2(oneOrTwo);
          case "LL":
            return intUnit2(two);
          case "LLL":
            return oneOf2(loc.months("short", false), 1);
          case "LLLL":
            return oneOf2(loc.months("long", false), 1);
          case "d":
            return intUnit2(oneOrTwo);
          case "dd":
            return intUnit2(two);
          case "o":
            return intUnit2(oneToThree);
          case "ooo":
            return intUnit2(three);
          case "HH":
            return intUnit2(two);
          case "H":
            return intUnit2(oneOrTwo);
          case "hh":
            return intUnit2(two);
          case "h":
            return intUnit2(oneOrTwo);
          case "mm":
            return intUnit2(two);
          case "m":
            return intUnit2(oneOrTwo);
          case "q":
            return intUnit2(oneOrTwo);
          case "qq":
            return intUnit2(two);
          case "s":
            return intUnit2(oneOrTwo);
          case "ss":
            return intUnit2(two);
          case "S":
            return intUnit2(oneToThree);
          case "SSS":
            return intUnit2(three);
          case "u":
            return simple2(oneToNine);
          case "uu":
            return simple2(oneOrTwo);
          case "uuu":
            return intUnit2(one);
          case "a":
            return oneOf2(loc.meridiems(), 0);
          case "kkkk":
            return intUnit2(four);
          case "kk":
            return intUnit2(twoToFour, untruncateYear2);
          case "W":
            return intUnit2(oneOrTwo);
          case "WW":
            return intUnit2(two);
          case "E":
          case "c":
            return intUnit2(one);
          case "EEE":
            return oneOf2(loc.weekdays("short", false), 1);
          case "EEEE":
            return oneOf2(loc.weekdays("long", false), 1);
          case "ccc":
            return oneOf2(loc.weekdays("short", true), 1);
          case "cccc":
            return oneOf2(loc.weekdays("long", true), 1);
          case "Z":
          case "ZZ":
            return offset2(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
          case "ZZZ":
            return offset2(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
          case "z":
            return simple2(/[a-z_+-/]{1,256}?/i);
          case " ":
            return simple2(/[^\S\n\r]/);
          default:
            return literal(t);
        }
      };
      const unit = unitate(token) || {
        invalidReason: MISSING_FTP2
      };
      unit.token = token;
      return unit;
    }
    var partTypeStyleToTokenVal2 = {
      year: {
        "2-digit": "yy",
        numeric: "yyyyy"
      },
      month: {
        numeric: "M",
        "2-digit": "MM",
        short: "MMM",
        long: "MMMM"
      },
      day: {
        numeric: "d",
        "2-digit": "dd"
      },
      weekday: {
        short: "EEE",
        long: "EEEE"
      },
      dayperiod: "a",
      dayPeriod: "a",
      hour12: {
        numeric: "h",
        "2-digit": "hh"
      },
      hour24: {
        numeric: "H",
        "2-digit": "HH"
      },
      minute: {
        numeric: "m",
        "2-digit": "mm"
      },
      second: {
        numeric: "s",
        "2-digit": "ss"
      },
      timeZoneName: {
        long: "ZZZZZ",
        short: "ZZZ"
      }
    };
    function tokenForPart2(part, formatOpts, resolvedOpts) {
      const { type, value } = part;
      if (type === "literal") {
        const isSpace = /^\s+$/.test(value);
        return {
          literal: !isSpace,
          val: isSpace ? " " : value
        };
      }
      const style = formatOpts[type];
      let actualType = type;
      if (type === "hour") {
        if (formatOpts.hour12 != null) {
          actualType = formatOpts.hour12 ? "hour12" : "hour24";
        } else if (formatOpts.hourCycle != null) {
          if (formatOpts.hourCycle === "h11" || formatOpts.hourCycle === "h12") {
            actualType = "hour12";
          } else {
            actualType = "hour24";
          }
        } else {
          actualType = resolvedOpts.hour12 ? "hour12" : "hour24";
        }
      }
      let val = partTypeStyleToTokenVal2[actualType];
      if (typeof val === "object") {
        val = val[style];
      }
      if (val) {
        return {
          literal: false,
          val
        };
      }
      return void 0;
    }
    function buildRegex2(units) {
      const re = units.map((u) => u.regex).reduce((f, r) => `${f}(${r.source})`, "");
      return [`^${re}$`, units];
    }
    function match2(input, regex, handlers) {
      const matches = input.match(regex);
      if (matches) {
        const all = {};
        let matchIndex = 1;
        for (const i in handlers) {
          if (hasOwnProperty2(handlers, i)) {
            const h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
            if (!h.literal && h.token) {
              all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
            }
            matchIndex += groups;
          }
        }
        return [matches, all];
      } else {
        return [matches, {}];
      }
    }
    function dateTimeFromMatches2(matches) {
      const toField = (token) => {
        switch (token) {
          case "S":
            return "millisecond";
          case "s":
            return "second";
          case "m":
            return "minute";
          case "h":
          case "H":
            return "hour";
          case "d":
            return "day";
          case "o":
            return "ordinal";
          case "L":
          case "M":
            return "month";
          case "y":
            return "year";
          case "E":
          case "c":
            return "weekday";
          case "W":
            return "weekNumber";
          case "k":
            return "weekYear";
          case "q":
            return "quarter";
          default:
            return null;
        }
      };
      let zone = null;
      let specificOffset;
      if (!isUndefined2(matches.z)) {
        zone = IANAZone2.create(matches.z);
      }
      if (!isUndefined2(matches.Z)) {
        if (!zone) {
          zone = new FixedOffsetZone2(matches.Z);
        }
        specificOffset = matches.Z;
      }
      if (!isUndefined2(matches.q)) {
        matches.M = (matches.q - 1) * 3 + 1;
      }
      if (!isUndefined2(matches.h)) {
        if (matches.h < 12 && matches.a === 1) {
          matches.h += 12;
        } else if (matches.h === 12 && matches.a === 0) {
          matches.h = 0;
        }
      }
      if (matches.G === 0 && matches.y) {
        matches.y = -matches.y;
      }
      if (!isUndefined2(matches.u)) {
        matches.S = parseMillis2(matches.u);
      }
      const vals = Object.keys(matches).reduce((r, k) => {
        const f = toField(k);
        if (f) {
          r[f] = matches[k];
        }
        return r;
      }, {});
      return [vals, zone, specificOffset];
    }
    var dummyDateTimeCache2 = null;
    function getDummyDateTime2() {
      if (!dummyDateTimeCache2) {
        dummyDateTimeCache2 = DateTime2.fromMillis(1555555555555);
      }
      return dummyDateTimeCache2;
    }
    function maybeExpandMacroToken2(token, locale) {
      if (token.literal) {
        return token;
      }
      const formatOpts = Formatter2.macroTokenToFormatOpts(token.val);
      const tokens = formatOptsToTokens2(formatOpts, locale);
      if (tokens == null || tokens.includes(void 0)) {
        return token;
      }
      return tokens;
    }
    function expandMacroTokens2(tokens, locale) {
      return Array.prototype.concat(...tokens.map((t) => maybeExpandMacroToken2(t, locale)));
    }
    function explainFromTokens2(locale, input, format) {
      const tokens = expandMacroTokens2(Formatter2.parseFormat(format), locale), units = tokens.map((t) => unitForToken2(t, locale)), disqualifyingUnit = units.find((t) => t.invalidReason);
      if (disqualifyingUnit) {
        return { input, tokens, invalidReason: disqualifyingUnit.invalidReason };
      } else {
        const [regexString, handlers] = buildRegex2(units), regex = RegExp(regexString, "i"), [rawMatches, matches] = match2(input, regex, handlers), [result, zone, specificOffset] = matches ? dateTimeFromMatches2(matches) : [null, null, void 0];
        if (hasOwnProperty2(matches, "a") && hasOwnProperty2(matches, "H")) {
          throw new ConflictingSpecificationError2("Can't include meridiem when specifying 24-hour format");
        }
        return { input, tokens, regex, rawMatches, matches, result, zone, specificOffset };
      }
    }
    function parseFromTokens2(locale, input, format) {
      const { result, zone, specificOffset, invalidReason } = explainFromTokens2(locale, input, format);
      return [result, zone, specificOffset, invalidReason];
    }
    function formatOptsToTokens2(formatOpts, locale) {
      if (!formatOpts) {
        return null;
      }
      const formatter = Formatter2.create(locale, formatOpts);
      const df = formatter.dtFormatter(getDummyDateTime2());
      const parts = df.formatToParts();
      const resolvedOpts = df.resolvedOptions();
      return parts.map((p) => tokenForPart2(p, formatOpts, resolvedOpts));
    }
    var nonLeapLadder2 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var leapLadder2 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
    function unitOutOfRange2(unit, value) {
      return new Invalid2("unit out of range", `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`);
    }
    function dayOfWeek2(year, month, day) {
      const d = new Date(Date.UTC(year, month - 1, day));
      if (year < 100 && year >= 0) {
        d.setUTCFullYear(d.getUTCFullYear() - 1900);
      }
      const js = d.getUTCDay();
      return js === 0 ? 7 : js;
    }
    function computeOrdinal2(year, month, day) {
      return day + (isLeapYear2(year) ? leapLadder2 : nonLeapLadder2)[month - 1];
    }
    function uncomputeOrdinal2(year, ordinal) {
      const table = isLeapYear2(year) ? leapLadder2 : nonLeapLadder2, month0 = table.findIndex((i) => i < ordinal), day = ordinal - table[month0];
      return { month: month0 + 1, day };
    }
    function gregorianToWeek2(gregObj) {
      const { year, month, day } = gregObj, ordinal = computeOrdinal2(year, month, day), weekday = dayOfWeek2(year, month, day);
      let weekNumber = Math.floor((ordinal - weekday + 10) / 7), weekYear;
      if (weekNumber < 1) {
        weekYear = year - 1;
        weekNumber = weeksInWeekYear2(weekYear);
      } else if (weekNumber > weeksInWeekYear2(year)) {
        weekYear = year + 1;
        weekNumber = 1;
      } else {
        weekYear = year;
      }
      return { weekYear, weekNumber, weekday, ...timeObject2(gregObj) };
    }
    function weekToGregorian2(weekData) {
      const { weekYear, weekNumber, weekday } = weekData, weekdayOfJan4 = dayOfWeek2(weekYear, 1, 4), yearInDays = daysInYear2(weekYear);
      let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3, year;
      if (ordinal < 1) {
        year = weekYear - 1;
        ordinal += daysInYear2(year);
      } else if (ordinal > yearInDays) {
        year = weekYear + 1;
        ordinal -= daysInYear2(weekYear);
      } else {
        year = weekYear;
      }
      const { month, day } = uncomputeOrdinal2(year, ordinal);
      return { year, month, day, ...timeObject2(weekData) };
    }
    function gregorianToOrdinal2(gregData) {
      const { year, month, day } = gregData;
      const ordinal = computeOrdinal2(year, month, day);
      return { year, ordinal, ...timeObject2(gregData) };
    }
    function ordinalToGregorian2(ordinalData) {
      const { year, ordinal } = ordinalData;
      const { month, day } = uncomputeOrdinal2(year, ordinal);
      return { year, month, day, ...timeObject2(ordinalData) };
    }
    function hasInvalidWeekData2(obj) {
      const validYear = isInteger2(obj.weekYear), validWeek = integerBetween2(obj.weekNumber, 1, weeksInWeekYear2(obj.weekYear)), validWeekday = integerBetween2(obj.weekday, 1, 7);
      if (!validYear) {
        return unitOutOfRange2("weekYear", obj.weekYear);
      } else if (!validWeek) {
        return unitOutOfRange2("week", obj.week);
      } else if (!validWeekday) {
        return unitOutOfRange2("weekday", obj.weekday);
      } else
        return false;
    }
    function hasInvalidOrdinalData2(obj) {
      const validYear = isInteger2(obj.year), validOrdinal = integerBetween2(obj.ordinal, 1, daysInYear2(obj.year));
      if (!validYear) {
        return unitOutOfRange2("year", obj.year);
      } else if (!validOrdinal) {
        return unitOutOfRange2("ordinal", obj.ordinal);
      } else
        return false;
    }
    function hasInvalidGregorianData2(obj) {
      const validYear = isInteger2(obj.year), validMonth = integerBetween2(obj.month, 1, 12), validDay = integerBetween2(obj.day, 1, daysInMonth2(obj.year, obj.month));
      if (!validYear) {
        return unitOutOfRange2("year", obj.year);
      } else if (!validMonth) {
        return unitOutOfRange2("month", obj.month);
      } else if (!validDay) {
        return unitOutOfRange2("day", obj.day);
      } else
        return false;
    }
    function hasInvalidTimeData2(obj) {
      const { hour, minute, second, millisecond } = obj;
      const validHour = integerBetween2(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween2(minute, 0, 59), validSecond = integerBetween2(second, 0, 59), validMillisecond = integerBetween2(millisecond, 0, 999);
      if (!validHour) {
        return unitOutOfRange2("hour", hour);
      } else if (!validMinute) {
        return unitOutOfRange2("minute", minute);
      } else if (!validSecond) {
        return unitOutOfRange2("second", second);
      } else if (!validMillisecond) {
        return unitOutOfRange2("millisecond", millisecond);
      } else
        return false;
    }
    var INVALID4 = "Invalid DateTime";
    var MAX_DATE2 = 864e13;
    function unsupportedZone2(zone) {
      return new Invalid2("unsupported zone", `the zone "${zone.name}" is not supported`);
    }
    function possiblyCachedWeekData2(dt) {
      if (dt.weekData === null) {
        dt.weekData = gregorianToWeek2(dt.c);
      }
      return dt.weekData;
    }
    function clone3(inst, alts) {
      const current = {
        ts: inst.ts,
        zone: inst.zone,
        c: inst.c,
        o: inst.o,
        loc: inst.loc,
        invalid: inst.invalid
      };
      return new DateTime2({ ...current, ...alts, old: current });
    }
    function fixOffset2(localTS, o, tz) {
      let utcGuess = localTS - o * 60 * 1e3;
      const o2 = tz.offset(utcGuess);
      if (o === o2) {
        return [utcGuess, o];
      }
      utcGuess -= (o2 - o) * 60 * 1e3;
      const o3 = tz.offset(utcGuess);
      if (o2 === o3) {
        return [utcGuess, o2];
      }
      return [localTS - Math.min(o2, o3) * 60 * 1e3, Math.max(o2, o3)];
    }
    function tsToObj2(ts, offset3) {
      ts += offset3 * 60 * 1e3;
      const d = new Date(ts);
      return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate(),
        hour: d.getUTCHours(),
        minute: d.getUTCMinutes(),
        second: d.getUTCSeconds(),
        millisecond: d.getUTCMilliseconds()
      };
    }
    function objToTS2(obj, offset3, zone) {
      return fixOffset2(objToLocalTS2(obj), offset3, zone);
    }
    function adjustTime2(inst, dur) {
      const oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = {
        ...inst.c,
        year,
        month,
        day: Math.min(inst.c.day, daysInMonth2(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
      }, millisToAdd = Duration2.fromObject({
        years: dur.years - Math.trunc(dur.years),
        quarters: dur.quarters - Math.trunc(dur.quarters),
        months: dur.months - Math.trunc(dur.months),
        weeks: dur.weeks - Math.trunc(dur.weeks),
        days: dur.days - Math.trunc(dur.days),
        hours: dur.hours,
        minutes: dur.minutes,
        seconds: dur.seconds,
        milliseconds: dur.milliseconds
      }).as("milliseconds"), localTS = objToLocalTS2(c);
      let [ts, o] = fixOffset2(localTS, oPre, inst.zone);
      if (millisToAdd !== 0) {
        ts += millisToAdd;
        o = inst.zone.offset(ts);
      }
      return { ts, o };
    }
    function parseDataToDateTime2(parsed, parsedZone, opts, format, text, specificOffset) {
      const { setZone, zone } = opts;
      if (parsed && Object.keys(parsed).length !== 0 || parsedZone) {
        const interpretationZone = parsedZone || zone, inst = DateTime2.fromObject(parsed, {
          ...opts,
          zone: interpretationZone,
          specificOffset
        });
        return setZone ? inst : inst.setZone(zone);
      } else {
        return DateTime2.invalid(new Invalid2("unparsable", `the input "${text}" can't be parsed as ${format}`));
      }
    }
    function toTechFormat2(dt, format, allowZ = true) {
      return dt.isValid ? Formatter2.create(Locale2.create("en-US"), {
        allowZ,
        forceSimple: true
      }).formatDateTimeFromString(dt, format) : null;
    }
    function toISODate2(o, extended) {
      const longFormat = o.c.year > 9999 || o.c.year < 0;
      let c = "";
      if (longFormat && o.c.year >= 0)
        c += "+";
      c += padStart2(o.c.year, longFormat ? 6 : 4);
      if (extended) {
        c += "-";
        c += padStart2(o.c.month);
        c += "-";
        c += padStart2(o.c.day);
      } else {
        c += padStart2(o.c.month);
        c += padStart2(o.c.day);
      }
      return c;
    }
    function toISOTime2(o, extended, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone) {
      let c = padStart2(o.c.hour);
      if (extended) {
        c += ":";
        c += padStart2(o.c.minute);
        if (o.c.millisecond !== 0 || o.c.second !== 0 || !suppressSeconds) {
          c += ":";
        }
      } else {
        c += padStart2(o.c.minute);
      }
      if (o.c.millisecond !== 0 || o.c.second !== 0 || !suppressSeconds) {
        c += padStart2(o.c.second);
        if (o.c.millisecond !== 0 || !suppressMilliseconds) {
          c += ".";
          c += padStart2(o.c.millisecond, 3);
        }
      }
      if (includeOffset) {
        if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
          c += "Z";
        } else if (o.o < 0) {
          c += "-";
          c += padStart2(Math.trunc(-o.o / 60));
          c += ":";
          c += padStart2(Math.trunc(-o.o % 60));
        } else {
          c += "+";
          c += padStart2(Math.trunc(o.o / 60));
          c += ":";
          c += padStart2(Math.trunc(o.o % 60));
        }
      }
      if (extendedZone) {
        c += "[" + o.zone.ianaName + "]";
      }
      return c;
    }
    var defaultUnitValues2 = {
      month: 1,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    };
    var defaultWeekUnitValues2 = {
      weekNumber: 1,
      weekday: 1,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    };
    var defaultOrdinalUnitValues2 = {
      ordinal: 1,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    };
    var orderedUnits3 = ["year", "month", "day", "hour", "minute", "second", "millisecond"];
    var orderedWeekUnits2 = [
      "weekYear",
      "weekNumber",
      "weekday",
      "hour",
      "minute",
      "second",
      "millisecond"
    ];
    var orderedOrdinalUnits2 = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
    function normalizeUnit2(unit) {
      const normalized = {
        year: "year",
        years: "year",
        month: "month",
        months: "month",
        day: "day",
        days: "day",
        hour: "hour",
        hours: "hour",
        minute: "minute",
        minutes: "minute",
        quarter: "quarter",
        quarters: "quarter",
        second: "second",
        seconds: "second",
        millisecond: "millisecond",
        milliseconds: "millisecond",
        weekday: "weekday",
        weekdays: "weekday",
        weeknumber: "weekNumber",
        weeksnumber: "weekNumber",
        weeknumbers: "weekNumber",
        weekyear: "weekYear",
        weekyears: "weekYear",
        ordinal: "ordinal"
      }[unit.toLowerCase()];
      if (!normalized)
        throw new InvalidUnitError2(unit);
      return normalized;
    }
    function quickDT2(obj, opts) {
      const zone = normalizeZone2(opts.zone, Settings2.defaultZone), loc = Locale2.fromObject(opts), tsNow = Settings2.now();
      let ts, o;
      if (!isUndefined2(obj.year)) {
        for (const u of orderedUnits3) {
          if (isUndefined2(obj[u])) {
            obj[u] = defaultUnitValues2[u];
          }
        }
        const invalid = hasInvalidGregorianData2(obj) || hasInvalidTimeData2(obj);
        if (invalid) {
          return DateTime2.invalid(invalid);
        }
        const offsetProvis = zone.offset(tsNow);
        [ts, o] = objToTS2(obj, offsetProvis, zone);
      } else {
        ts = tsNow;
      }
      return new DateTime2({ ts, zone, loc, o });
    }
    function diffRelative2(start, end, opts) {
      const round = isUndefined2(opts.round) ? true : opts.round, format = (c, unit) => {
        c = roundTo2(c, round || opts.calendary ? 0 : 2, true);
        const formatter = end.loc.clone(opts).relFormatter(opts);
        return formatter.format(c, unit);
      }, differ = (unit) => {
        if (opts.calendary) {
          if (!end.hasSame(start, unit)) {
            return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
          } else
            return 0;
        } else {
          return end.diff(start, unit).get(unit);
        }
      };
      if (opts.unit) {
        return format(differ(opts.unit), opts.unit);
      }
      for (const unit of opts.units) {
        const count = differ(unit);
        if (Math.abs(count) >= 1) {
          return format(count, unit);
        }
      }
      return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
    }
    function lastOpts2(argList) {
      let opts = {}, args;
      if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
        opts = argList[argList.length - 1];
        args = Array.from(argList).slice(0, argList.length - 1);
      } else {
        args = Array.from(argList);
      }
      return [opts, args];
    }
    var DateTime2 = class {
      constructor(config) {
        const zone = config.zone || Settings2.defaultZone;
        let invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid2("invalid input") : null) || (!zone.isValid ? unsupportedZone2(zone) : null);
        this.ts = isUndefined2(config.ts) ? Settings2.now() : config.ts;
        let c = null, o = null;
        if (!invalid) {
          const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
          if (unchanged) {
            [c, o] = [config.old.c, config.old.o];
          } else {
            const ot = zone.offset(this.ts);
            c = tsToObj2(this.ts, ot);
            invalid = Number.isNaN(c.year) ? new Invalid2("invalid input") : null;
            c = invalid ? null : c;
            o = invalid ? null : ot;
          }
        }
        this._zone = zone;
        this.loc = config.loc || Locale2.create();
        this.invalid = invalid;
        this.weekData = null;
        this.c = c;
        this.o = o;
        this.isLuxonDateTime = true;
      }
      static now() {
        return new DateTime2({});
      }
      static local() {
        const [opts, args] = lastOpts2(arguments), [year, month, day, hour, minute, second, millisecond] = args;
        return quickDT2({ year, month, day, hour, minute, second, millisecond }, opts);
      }
      static utc() {
        const [opts, args] = lastOpts2(arguments), [year, month, day, hour, minute, second, millisecond] = args;
        opts.zone = FixedOffsetZone2.utcInstance;
        return quickDT2({ year, month, day, hour, minute, second, millisecond }, opts);
      }
      static fromJSDate(date, options = {}) {
        const ts = isDate2(date) ? date.valueOf() : NaN;
        if (Number.isNaN(ts)) {
          return DateTime2.invalid("invalid input");
        }
        const zoneToUse = normalizeZone2(options.zone, Settings2.defaultZone);
        if (!zoneToUse.isValid) {
          return DateTime2.invalid(unsupportedZone2(zoneToUse));
        }
        return new DateTime2({
          ts,
          zone: zoneToUse,
          loc: Locale2.fromObject(options)
        });
      }
      static fromMillis(milliseconds, options = {}) {
        if (!isNumber2(milliseconds)) {
          throw new InvalidArgumentError2(`fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`);
        } else if (milliseconds < -MAX_DATE2 || milliseconds > MAX_DATE2) {
          return DateTime2.invalid("Timestamp out of range");
        } else {
          return new DateTime2({
            ts: milliseconds,
            zone: normalizeZone2(options.zone, Settings2.defaultZone),
            loc: Locale2.fromObject(options)
          });
        }
      }
      static fromSeconds(seconds, options = {}) {
        if (!isNumber2(seconds)) {
          throw new InvalidArgumentError2("fromSeconds requires a numerical input");
        } else {
          return new DateTime2({
            ts: seconds * 1e3,
            zone: normalizeZone2(options.zone, Settings2.defaultZone),
            loc: Locale2.fromObject(options)
          });
        }
      }
      static fromObject(obj, opts = {}) {
        obj = obj || {};
        const zoneToUse = normalizeZone2(opts.zone, Settings2.defaultZone);
        if (!zoneToUse.isValid) {
          return DateTime2.invalid(unsupportedZone2(zoneToUse));
        }
        const tsNow = Settings2.now(), offsetProvis = !isUndefined2(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow), normalized = normalizeObject2(obj, normalizeUnit2), containsOrdinal = !isUndefined2(normalized.ordinal), containsGregorYear = !isUndefined2(normalized.year), containsGregorMD = !isUndefined2(normalized.month) || !isUndefined2(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber, loc = Locale2.fromObject(opts);
        if ((containsGregor || containsOrdinal) && definiteWeekDef) {
          throw new ConflictingSpecificationError2("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        }
        if (containsGregorMD && containsOrdinal) {
          throw new ConflictingSpecificationError2("Can't mix ordinal dates with month/day");
        }
        const useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
        let units, defaultValues, objNow = tsToObj2(tsNow, offsetProvis);
        if (useWeekData) {
          units = orderedWeekUnits2;
          defaultValues = defaultWeekUnitValues2;
          objNow = gregorianToWeek2(objNow);
        } else if (containsOrdinal) {
          units = orderedOrdinalUnits2;
          defaultValues = defaultOrdinalUnitValues2;
          objNow = gregorianToOrdinal2(objNow);
        } else {
          units = orderedUnits3;
          defaultValues = defaultUnitValues2;
        }
        let foundFirst = false;
        for (const u of units) {
          const v = normalized[u];
          if (!isUndefined2(v)) {
            foundFirst = true;
          } else if (foundFirst) {
            normalized[u] = defaultValues[u];
          } else {
            normalized[u] = objNow[u];
          }
        }
        const higherOrderInvalid = useWeekData ? hasInvalidWeekData2(normalized) : containsOrdinal ? hasInvalidOrdinalData2(normalized) : hasInvalidGregorianData2(normalized), invalid = higherOrderInvalid || hasInvalidTimeData2(normalized);
        if (invalid) {
          return DateTime2.invalid(invalid);
        }
        const gregorian = useWeekData ? weekToGregorian2(normalized) : containsOrdinal ? ordinalToGregorian2(normalized) : normalized, [tsFinal, offsetFinal] = objToTS2(gregorian, offsetProvis, zoneToUse), inst = new DateTime2({
          ts: tsFinal,
          zone: zoneToUse,
          o: offsetFinal,
          loc
        });
        if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
          return DateTime2.invalid("mismatched weekday", `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`);
        }
        return inst;
      }
      static fromISO(text, opts = {}) {
        const [vals, parsedZone] = parseISODate2(text);
        return parseDataToDateTime2(vals, parsedZone, opts, "ISO 8601", text);
      }
      static fromRFC2822(text, opts = {}) {
        const [vals, parsedZone] = parseRFC2822Date2(text);
        return parseDataToDateTime2(vals, parsedZone, opts, "RFC 2822", text);
      }
      static fromHTTP(text, opts = {}) {
        const [vals, parsedZone] = parseHTTPDate2(text);
        return parseDataToDateTime2(vals, parsedZone, opts, "HTTP", opts);
      }
      static fromFormat(text, fmt, opts = {}) {
        if (isUndefined2(text) || isUndefined2(fmt)) {
          throw new InvalidArgumentError2("fromFormat requires an input string and a format");
        }
        const { locale = null, numberingSystem = null } = opts, localeToUse = Locale2.fromOpts({
          locale,
          numberingSystem,
          defaultToEN: true
        }), [vals, parsedZone, specificOffset, invalid] = parseFromTokens2(localeToUse, text, fmt);
        if (invalid) {
          return DateTime2.invalid(invalid);
        } else {
          return parseDataToDateTime2(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
        }
      }
      static fromString(text, fmt, opts = {}) {
        return DateTime2.fromFormat(text, fmt, opts);
      }
      static fromSQL(text, opts = {}) {
        const [vals, parsedZone] = parseSQL2(text);
        return parseDataToDateTime2(vals, parsedZone, opts, "SQL", text);
      }
      static invalid(reason, explanation = null) {
        if (!reason) {
          throw new InvalidArgumentError2("need to specify a reason the DateTime is invalid");
        }
        const invalid = reason instanceof Invalid2 ? reason : new Invalid2(reason, explanation);
        if (Settings2.throwOnInvalid) {
          throw new InvalidDateTimeError2(invalid);
        } else {
          return new DateTime2({ invalid });
        }
      }
      static isDateTime(o) {
        return o && o.isLuxonDateTime || false;
      }
      static parseFormatForOpts(formatOpts, localeOpts = {}) {
        const tokenList = formatOptsToTokens2(formatOpts, Locale2.fromObject(localeOpts));
        return !tokenList ? null : tokenList.map((t) => t ? t.val : null).join("");
      }
      static expandFormat(fmt, localeOpts = {}) {
        const expanded = expandMacroTokens2(Formatter2.parseFormat(fmt), Locale2.fromObject(localeOpts));
        return expanded.map((t) => t.val).join("");
      }
      get(unit) {
        return this[unit];
      }
      get isValid() {
        return this.invalid === null;
      }
      get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
      }
      get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
      }
      get locale() {
        return this.isValid ? this.loc.locale : null;
      }
      get numberingSystem() {
        return this.isValid ? this.loc.numberingSystem : null;
      }
      get outputCalendar() {
        return this.isValid ? this.loc.outputCalendar : null;
      }
      get zone() {
        return this._zone;
      }
      get zoneName() {
        return this.isValid ? this.zone.name : null;
      }
      get year() {
        return this.isValid ? this.c.year : NaN;
      }
      get quarter() {
        return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
      }
      get month() {
        return this.isValid ? this.c.month : NaN;
      }
      get day() {
        return this.isValid ? this.c.day : NaN;
      }
      get hour() {
        return this.isValid ? this.c.hour : NaN;
      }
      get minute() {
        return this.isValid ? this.c.minute : NaN;
      }
      get second() {
        return this.isValid ? this.c.second : NaN;
      }
      get millisecond() {
        return this.isValid ? this.c.millisecond : NaN;
      }
      get weekYear() {
        return this.isValid ? possiblyCachedWeekData2(this).weekYear : NaN;
      }
      get weekNumber() {
        return this.isValid ? possiblyCachedWeekData2(this).weekNumber : NaN;
      }
      get weekday() {
        return this.isValid ? possiblyCachedWeekData2(this).weekday : NaN;
      }
      get ordinal() {
        return this.isValid ? gregorianToOrdinal2(this.c).ordinal : NaN;
      }
      get monthShort() {
        return this.isValid ? Info2.months("short", { locObj: this.loc })[this.month - 1] : null;
      }
      get monthLong() {
        return this.isValid ? Info2.months("long", { locObj: this.loc })[this.month - 1] : null;
      }
      get weekdayShort() {
        return this.isValid ? Info2.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
      }
      get weekdayLong() {
        return this.isValid ? Info2.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
      }
      get offset() {
        return this.isValid ? +this.o : NaN;
      }
      get offsetNameShort() {
        if (this.isValid) {
          return this.zone.offsetName(this.ts, {
            format: "short",
            locale: this.locale
          });
        } else {
          return null;
        }
      }
      get offsetNameLong() {
        if (this.isValid) {
          return this.zone.offsetName(this.ts, {
            format: "long",
            locale: this.locale
          });
        } else {
          return null;
        }
      }
      get isOffsetFixed() {
        return this.isValid ? this.zone.isUniversal : null;
      }
      get isInDST() {
        if (this.isOffsetFixed) {
          return false;
        } else {
          return this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
        }
      }
      getPossibleOffsets() {
        if (!this.isValid || this.isOffsetFixed) {
          return [this];
        }
        const dayMs = 864e5;
        const minuteMs = 6e4;
        const localTS = objToLocalTS2(this.c);
        const oEarlier = this.zone.offset(localTS - dayMs);
        const oLater = this.zone.offset(localTS + dayMs);
        const o1 = this.zone.offset(localTS - oEarlier * minuteMs);
        const o2 = this.zone.offset(localTS - oLater * minuteMs);
        if (o1 === o2) {
          return [this];
        }
        const ts1 = localTS - o1 * minuteMs;
        const ts2 = localTS - o2 * minuteMs;
        const c1 = tsToObj2(ts1, o1);
        const c2 = tsToObj2(ts2, o2);
        if (c1.hour === c2.hour && c1.minute === c2.minute && c1.second === c2.second && c1.millisecond === c2.millisecond) {
          return [clone3(this, { ts: ts1 }), clone3(this, { ts: ts2 })];
        }
        return [this];
      }
      get isInLeapYear() {
        return isLeapYear2(this.year);
      }
      get daysInMonth() {
        return daysInMonth2(this.year, this.month);
      }
      get daysInYear() {
        return this.isValid ? daysInYear2(this.year) : NaN;
      }
      get weeksInWeekYear() {
        return this.isValid ? weeksInWeekYear2(this.weekYear) : NaN;
      }
      resolvedLocaleOptions(opts = {}) {
        const { locale, numberingSystem, calendar } = Formatter2.create(this.loc.clone(opts), opts).resolvedOptions(this);
        return { locale, numberingSystem, outputCalendar: calendar };
      }
      toUTC(offset3 = 0, opts = {}) {
        return this.setZone(FixedOffsetZone2.instance(offset3), opts);
      }
      toLocal() {
        return this.setZone(Settings2.defaultZone);
      }
      setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
        zone = normalizeZone2(zone, Settings2.defaultZone);
        if (zone.equals(this.zone)) {
          return this;
        } else if (!zone.isValid) {
          return DateTime2.invalid(unsupportedZone2(zone));
        } else {
          let newTS = this.ts;
          if (keepLocalTime || keepCalendarTime) {
            const offsetGuess = zone.offset(this.ts);
            const asObj = this.toObject();
            [newTS] = objToTS2(asObj, offsetGuess, zone);
          }
          return clone3(this, { ts: newTS, zone });
        }
      }
      reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
        const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
        return clone3(this, { loc });
      }
      setLocale(locale) {
        return this.reconfigure({ locale });
      }
      set(values) {
        if (!this.isValid)
          return this;
        const normalized = normalizeObject2(values, normalizeUnit2), settingWeekStuff = !isUndefined2(normalized.weekYear) || !isUndefined2(normalized.weekNumber) || !isUndefined2(normalized.weekday), containsOrdinal = !isUndefined2(normalized.ordinal), containsGregorYear = !isUndefined2(normalized.year), containsGregorMD = !isUndefined2(normalized.month) || !isUndefined2(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
        if ((containsGregor || containsOrdinal) && definiteWeekDef) {
          throw new ConflictingSpecificationError2("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        }
        if (containsGregorMD && containsOrdinal) {
          throw new ConflictingSpecificationError2("Can't mix ordinal dates with month/day");
        }
        let mixed;
        if (settingWeekStuff) {
          mixed = weekToGregorian2({ ...gregorianToWeek2(this.c), ...normalized });
        } else if (!isUndefined2(normalized.ordinal)) {
          mixed = ordinalToGregorian2({ ...gregorianToOrdinal2(this.c), ...normalized });
        } else {
          mixed = { ...this.toObject(), ...normalized };
          if (isUndefined2(normalized.day)) {
            mixed.day = Math.min(daysInMonth2(mixed.year, mixed.month), mixed.day);
          }
        }
        const [ts, o] = objToTS2(mixed, this.o, this.zone);
        return clone3(this, { ts, o });
      }
      plus(duration) {
        if (!this.isValid)
          return this;
        const dur = Duration2.fromDurationLike(duration);
        return clone3(this, adjustTime2(this, dur));
      }
      minus(duration) {
        if (!this.isValid)
          return this;
        const dur = Duration2.fromDurationLike(duration).negate();
        return clone3(this, adjustTime2(this, dur));
      }
      startOf(unit) {
        if (!this.isValid)
          return this;
        const o = {}, normalizedUnit = Duration2.normalizeUnit(unit);
        switch (normalizedUnit) {
          case "years":
            o.month = 1;
          case "quarters":
          case "months":
            o.day = 1;
          case "weeks":
          case "days":
            o.hour = 0;
          case "hours":
            o.minute = 0;
          case "minutes":
            o.second = 0;
          case "seconds":
            o.millisecond = 0;
            break;
        }
        if (normalizedUnit === "weeks") {
          o.weekday = 1;
        }
        if (normalizedUnit === "quarters") {
          const q = Math.ceil(this.month / 3);
          o.month = (q - 1) * 3 + 1;
        }
        return this.set(o);
      }
      endOf(unit) {
        return this.isValid ? this.plus({ [unit]: 1 }).startOf(unit).minus(1) : this;
      }
      toFormat(fmt, opts = {}) {
        return this.isValid ? Formatter2.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID4;
      }
      toLocaleString(formatOpts = DATE_SHORT2, opts = {}) {
        return this.isValid ? Formatter2.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID4;
      }
      toLocaleParts(opts = {}) {
        return this.isValid ? Formatter2.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
      }
      toISO({
        format = "extended",
        suppressSeconds = false,
        suppressMilliseconds = false,
        includeOffset = true,
        extendedZone = false
      } = {}) {
        if (!this.isValid) {
          return null;
        }
        const ext = format === "extended";
        let c = toISODate2(this, ext);
        c += "T";
        c += toISOTime2(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
        return c;
      }
      toISODate({ format = "extended" } = {}) {
        if (!this.isValid) {
          return null;
        }
        return toISODate2(this, format === "extended");
      }
      toISOWeekDate() {
        return toTechFormat2(this, "kkkk-'W'WW-c");
      }
      toISOTime({
        suppressMilliseconds = false,
        suppressSeconds = false,
        includeOffset = true,
        includePrefix = false,
        extendedZone = false,
        format = "extended"
      } = {}) {
        if (!this.isValid) {
          return null;
        }
        let c = includePrefix ? "T" : "";
        return c + toISOTime2(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
      }
      toRFC2822() {
        return toTechFormat2(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
      }
      toHTTP() {
        return toTechFormat2(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
      }
      toSQLDate() {
        if (!this.isValid) {
          return null;
        }
        return toISODate2(this, true);
      }
      toSQLTime({ includeOffset = true, includeZone = false, includeOffsetSpace = true } = {}) {
        let fmt = "HH:mm:ss.SSS";
        if (includeZone || includeOffset) {
          if (includeOffsetSpace) {
            fmt += " ";
          }
          if (includeZone) {
            fmt += "z";
          } else if (includeOffset) {
            fmt += "ZZ";
          }
        }
        return toTechFormat2(this, fmt, true);
      }
      toSQL(opts = {}) {
        if (!this.isValid) {
          return null;
        }
        return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
      }
      toString() {
        return this.isValid ? this.toISO() : INVALID4;
      }
      valueOf() {
        return this.toMillis();
      }
      toMillis() {
        return this.isValid ? this.ts : NaN;
      }
      toSeconds() {
        return this.isValid ? this.ts / 1e3 : NaN;
      }
      toUnixInteger() {
        return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
      }
      toJSON() {
        return this.toISO();
      }
      toBSON() {
        return this.toJSDate();
      }
      toObject(opts = {}) {
        if (!this.isValid)
          return {};
        const base = { ...this.c };
        if (opts.includeConfig) {
          base.outputCalendar = this.outputCalendar;
          base.numberingSystem = this.loc.numberingSystem;
          base.locale = this.loc.locale;
        }
        return base;
      }
      toJSDate() {
        return new Date(this.isValid ? this.ts : NaN);
      }
      diff(otherDateTime, unit = "milliseconds", opts = {}) {
        if (!this.isValid || !otherDateTime.isValid) {
          return Duration2.invalid("created by diffing an invalid DateTime");
        }
        const durOpts = { locale: this.locale, numberingSystem: this.numberingSystem, ...opts };
        const units = maybeArray2(unit).map(Duration2.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = diff(earlier, later, units, durOpts);
        return otherIsLater ? diffed.negate() : diffed;
      }
      diffNow(unit = "milliseconds", opts = {}) {
        return this.diff(DateTime2.now(), unit, opts);
      }
      until(otherDateTime) {
        return this.isValid ? Interval2.fromDateTimes(this, otherDateTime) : this;
      }
      hasSame(otherDateTime, unit) {
        if (!this.isValid)
          return false;
        const inputMs = otherDateTime.valueOf();
        const adjustedToZone = this.setZone(otherDateTime.zone, { keepLocalTime: true });
        return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
      }
      equals(other) {
        return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
      }
      toRelative(options = {}) {
        if (!this.isValid)
          return null;
        const base = options.base || DateTime2.fromObject({}, { zone: this.zone }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
        let units = ["years", "months", "days", "hours", "minutes", "seconds"];
        let unit = options.unit;
        if (Array.isArray(options.unit)) {
          units = options.unit;
          unit = void 0;
        }
        return diffRelative2(base, this.plus(padding), {
          ...options,
          numeric: "always",
          units,
          unit
        });
      }
      toRelativeCalendar(options = {}) {
        if (!this.isValid)
          return null;
        return diffRelative2(options.base || DateTime2.fromObject({}, { zone: this.zone }), this, {
          ...options,
          numeric: "auto",
          units: ["years", "months", "days"],
          calendary: true
        });
      }
      static min(...dateTimes) {
        if (!dateTimes.every(DateTime2.isDateTime)) {
          throw new InvalidArgumentError2("min requires all arguments be DateTimes");
        }
        return bestBy2(dateTimes, (i) => i.valueOf(), Math.min);
      }
      static max(...dateTimes) {
        if (!dateTimes.every(DateTime2.isDateTime)) {
          throw new InvalidArgumentError2("max requires all arguments be DateTimes");
        }
        return bestBy2(dateTimes, (i) => i.valueOf(), Math.max);
      }
      static fromFormatExplain(text, fmt, options = {}) {
        const { locale = null, numberingSystem = null } = options, localeToUse = Locale2.fromOpts({
          locale,
          numberingSystem,
          defaultToEN: true
        });
        return explainFromTokens2(localeToUse, text, fmt);
      }
      static fromStringExplain(text, fmt, options = {}) {
        return DateTime2.fromFormatExplain(text, fmt, options);
      }
      static get DATE_SHORT() {
        return DATE_SHORT2;
      }
      static get DATE_MED() {
        return DATE_MED2;
      }
      static get DATE_MED_WITH_WEEKDAY() {
        return DATE_MED_WITH_WEEKDAY2;
      }
      static get DATE_FULL() {
        return DATE_FULL2;
      }
      static get DATE_HUGE() {
        return DATE_HUGE2;
      }
      static get TIME_SIMPLE() {
        return TIME_SIMPLE2;
      }
      static get TIME_WITH_SECONDS() {
        return TIME_WITH_SECONDS2;
      }
      static get TIME_WITH_SHORT_OFFSET() {
        return TIME_WITH_SHORT_OFFSET2;
      }
      static get TIME_WITH_LONG_OFFSET() {
        return TIME_WITH_LONG_OFFSET2;
      }
      static get TIME_24_SIMPLE() {
        return TIME_24_SIMPLE2;
      }
      static get TIME_24_WITH_SECONDS() {
        return TIME_24_WITH_SECONDS2;
      }
      static get TIME_24_WITH_SHORT_OFFSET() {
        return TIME_24_WITH_SHORT_OFFSET2;
      }
      static get TIME_24_WITH_LONG_OFFSET() {
        return TIME_24_WITH_LONG_OFFSET2;
      }
      static get DATETIME_SHORT() {
        return DATETIME_SHORT2;
      }
      static get DATETIME_SHORT_WITH_SECONDS() {
        return DATETIME_SHORT_WITH_SECONDS2;
      }
      static get DATETIME_MED() {
        return DATETIME_MED2;
      }
      static get DATETIME_MED_WITH_SECONDS() {
        return DATETIME_MED_WITH_SECONDS2;
      }
      static get DATETIME_MED_WITH_WEEKDAY() {
        return DATETIME_MED_WITH_WEEKDAY2;
      }
      static get DATETIME_FULL() {
        return DATETIME_FULL2;
      }
      static get DATETIME_FULL_WITH_SECONDS() {
        return DATETIME_FULL_WITH_SECONDS2;
      }
      static get DATETIME_HUGE() {
        return DATETIME_HUGE2;
      }
      static get DATETIME_HUGE_WITH_SECONDS() {
        return DATETIME_HUGE_WITH_SECONDS2;
      }
    };
    function friendlyDateTime2(dateTimeish) {
      if (DateTime2.isDateTime(dateTimeish)) {
        return dateTimeish;
      } else if (dateTimeish && dateTimeish.valueOf && isNumber2(dateTimeish.valueOf())) {
        return DateTime2.fromJSDate(dateTimeish);
      } else if (dateTimeish && typeof dateTimeish === "object") {
        return DateTime2.fromObject(dateTimeish);
      } else {
        throw new InvalidArgumentError2(`Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`);
      }
    }
    var DEFAULT_QUERY_SETTINGS = {
      renderNullAs: "\\-",
      taskCompletionTracking: false,
      taskCompletionUseEmojiShorthand: false,
      taskCompletionText: "completion",
      taskCompletionDateFormat: "yyyy-MM-dd",
      recursiveSubTaskCompletion: false,
      warnOnEmptyResult: true,
      refreshEnabled: true,
      refreshInterval: 2500,
      defaultDateFormat: "MMMM dd, yyyy",
      defaultDateTimeFormat: "h:mm a - MMMM dd, yyyy",
      maxRecursiveRenderDepth: 4,
      tableIdColumnName: "File",
      tableGroupColumnName: "Group",
      showResultCount: true
    };
    var DEFAULT_EXPORT_SETTINGS = {
      allowHtml: true
    };
    ({
      ...DEFAULT_QUERY_SETTINGS,
      ...DEFAULT_EXPORT_SETTINGS,
      ...{
        inlineQueryPrefix: "=",
        inlineJsQueryPrefix: "$=",
        inlineQueriesInCodeblocks: true,
        enableInlineDataview: true,
        enableDataviewJs: false,
        enableInlineDataviewJs: false,
        prettyRenderInlineFields: true,
        prettyRenderInlineFieldsInLivePreview: true,
        dataviewJsKeyword: "dataviewjs"
      }
    });
    var Success = class {
      constructor(value) {
        __publicField(this, "value");
        __publicField(this, "successful");
        this.value = value;
        this.successful = true;
      }
      map(f) {
        return new Success(f(this.value));
      }
      flatMap(f) {
        return f(this.value);
      }
      mapErr(f) {
        return this;
      }
      bimap(succ, _fail) {
        return this.map(succ);
      }
      orElse(_value) {
        return this.value;
      }
      cast() {
        return this;
      }
      orElseThrow(_message) {
        return this.value;
      }
    };
    var Failure = class {
      constructor(error) {
        __publicField(this, "error");
        __publicField(this, "successful");
        this.error = error;
        this.successful = false;
      }
      map(_f) {
        return this;
      }
      flatMap(_f) {
        return this;
      }
      mapErr(f) {
        return new Failure(f(this.error));
      }
      bimap(_succ, fail) {
        return this.mapErr(fail);
      }
      orElse(value) {
        return value;
      }
      cast() {
        return this;
      }
      orElseThrow(message) {
        if (message)
          throw new Error(message(this.error));
        else
          throw new Error("" + this.error);
      }
    };
    var Result;
    (function(Result2) {
      function success(value) {
        return new Success(value);
      }
      Result2.success = success;
      function failure(error) {
        return new Failure(error);
      }
      Result2.failure = failure;
      function flatMap2(first, second, f) {
        if (first.successful) {
          if (second.successful)
            return f(first.value, second.value);
          else
            return failure(second.error);
        } else {
          return failure(first.error);
        }
      }
      Result2.flatMap2 = flatMap2;
      function map2(first, second, f) {
        return flatMap2(first, second, (a, b) => success(f(a, b)));
      }
      Result2.map2 = map2;
    })(Result || (Result = {}));
    var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    var parsimmon_umd_min = { exports: {} };
    parsimmon_umd_min.exports;
    (function(module3, exports2) {
      !function(n3, t) {
        module3.exports = t();
      }(typeof self != "undefined" ? self : commonjsGlobal, function() {
        return function(n3) {
          var t = {};
          function r(e) {
            if (t[e])
              return t[e].exports;
            var u = t[e] = { i: e, l: false, exports: {} };
            return n3[e].call(u.exports, u, u.exports, r), u.l = true, u.exports;
          }
          return r.m = n3, r.c = t, r.d = function(n4, t2, e) {
            r.o(n4, t2) || Object.defineProperty(n4, t2, { configurable: false, enumerable: true, get: e });
          }, r.r = function(n4) {
            Object.defineProperty(n4, "__esModule", { value: true });
          }, r.n = function(n4) {
            var t2 = n4 && n4.__esModule ? function() {
              return n4.default;
            } : function() {
              return n4;
            };
            return r.d(t2, "a", t2), t2;
          }, r.o = function(n4, t2) {
            return Object.prototype.hasOwnProperty.call(n4, t2);
          }, r.p = "", r(r.s = 0);
        }([function(n3, t, r) {
          function e(n4) {
            if (!(this instanceof e))
              return new e(n4);
            this._ = n4;
          }
          var u = e.prototype;
          function o(n4, t2) {
            for (var r2 = 0; r2 < n4; r2++)
              t2(r2);
          }
          function i(n4, t2, r2) {
            return function(n5, t3) {
              o(t3.length, function(r3) {
                n5(t3[r3], r3, t3);
              });
            }(function(r3, e2, u2) {
              t2 = n4(t2, r3, e2, u2);
            }, r2), t2;
          }
          function a(n4, t2) {
            return i(function(t3, r2, e2, u2) {
              return t3.concat([n4(r2, e2, u2)]);
            }, [], t2);
          }
          function f(n4, t2) {
            var r2 = { v: 0, buf: t2 };
            return o(n4, function() {
              var n5;
              r2 = { v: r2.v << 1 | (n5 = r2.buf, n5[0] >> 7), buf: function(n6) {
                var t3 = i(function(n7, t4, r3, e2) {
                  return n7.concat(r3 === e2.length - 1 ? Buffer.from([t4, 0]).readUInt16BE(0) : e2.readUInt16BE(r3));
                }, [], n6);
                return Buffer.from(a(function(n7) {
                  return (n7 << 1 & 65535) >> 8;
                }, t3));
              }(r2.buf) };
            }), r2;
          }
          function c() {
            return typeof Buffer != "undefined";
          }
          function s3() {
            if (!c())
              throw new Error("Buffer global does not exist; please use webpack if you need to parse Buffers in the browser.");
          }
          function l3(n4) {
            s3();
            var t2 = i(function(n5, t3) {
              return n5 + t3;
            }, 0, n4);
            if (t2 % 8 != 0)
              throw new Error("The bits [" + n4.join(", ") + "] add up to " + t2 + " which is not an even number of bytes; the total should be divisible by 8");
            var r2, u2 = t2 / 8, o2 = (r2 = function(n5) {
              return n5 > 48;
            }, i(function(n5, t3) {
              return n5 || (r2(t3) ? t3 : n5);
            }, null, n4));
            if (o2)
              throw new Error(o2 + " bit range requested exceeds 48 bit (6 byte) Number max.");
            return new e(function(t3, r3) {
              var e2 = u2 + r3;
              return e2 > t3.length ? x(r3, u2.toString() + " bytes") : b(e2, i(function(n5, t4) {
                var r4 = f(t4, n5.buf);
                return { coll: n5.coll.concat(r4.v), buf: r4.buf };
              }, { coll: [], buf: t3.slice(r3, e2) }, n4).coll);
            });
          }
          function h(n4, t2) {
            return new e(function(r2, e2) {
              return s3(), e2 + t2 > r2.length ? x(e2, t2 + " bytes for " + n4) : b(e2 + t2, r2.slice(e2, e2 + t2));
            });
          }
          function p(n4, t2) {
            if (typeof (r2 = t2) != "number" || Math.floor(r2) !== r2 || t2 < 0 || t2 > 6)
              throw new Error(n4 + " requires integer length in range [0, 6].");
            var r2;
          }
          function d(n4) {
            return p("uintBE", n4), h("uintBE(" + n4 + ")", n4).map(function(t2) {
              return t2.readUIntBE(0, n4);
            });
          }
          function v(n4) {
            return p("uintLE", n4), h("uintLE(" + n4 + ")", n4).map(function(t2) {
              return t2.readUIntLE(0, n4);
            });
          }
          function g(n4) {
            return p("intBE", n4), h("intBE(" + n4 + ")", n4).map(function(t2) {
              return t2.readIntBE(0, n4);
            });
          }
          function m(n4) {
            return p("intLE", n4), h("intLE(" + n4 + ")", n4).map(function(t2) {
              return t2.readIntLE(0, n4);
            });
          }
          function y(n4) {
            return n4 instanceof e;
          }
          function E(n4) {
            return {}.toString.call(n4) === "[object Array]";
          }
          function w(n4) {
            return c() && Buffer.isBuffer(n4);
          }
          function b(n4, t2) {
            return { status: true, index: n4, value: t2, furthest: -1, expected: [] };
          }
          function x(n4, t2) {
            return E(t2) || (t2 = [t2]), { status: false, index: -1, value: null, furthest: n4, expected: t2 };
          }
          function B(n4, t2) {
            if (!t2)
              return n4;
            if (n4.furthest > t2.furthest)
              return n4;
            var r2 = n4.furthest === t2.furthest ? function(n5, t3) {
              if (function() {
                if (e._supportsSet !== void 0)
                  return e._supportsSet;
                var n6 = typeof Set != "undefined";
                return e._supportsSet = n6, n6;
              }() && Array.from) {
                for (var r3 = new Set(n5), u2 = 0; u2 < t3.length; u2++)
                  r3.add(t3[u2]);
                var o2 = Array.from(r3);
                return o2.sort(), o2;
              }
              for (var i2 = {}, a2 = 0; a2 < n5.length; a2++)
                i2[n5[a2]] = true;
              for (var f2 = 0; f2 < t3.length; f2++)
                i2[t3[f2]] = true;
              var c2 = [];
              for (var s4 in i2)
                ({}).hasOwnProperty.call(i2, s4) && c2.push(s4);
              return c2.sort(), c2;
            }(n4.expected, t2.expected) : t2.expected;
            return { status: n4.status, index: n4.index, value: n4.value, furthest: t2.furthest, expected: r2 };
          }
          var j = {};
          function S(n4, t2) {
            if (w(n4))
              return { offset: t2, line: -1, column: -1 };
            n4 in j || (j[n4] = {});
            for (var r2 = j[n4], e2 = 0, u2 = 0, o2 = 0, i2 = t2; i2 >= 0; ) {
              if (i2 in r2) {
                e2 = r2[i2].line, o2 === 0 && (o2 = r2[i2].lineStart);
                break;
              }
              (n4.charAt(i2) === "\n" || n4.charAt(i2) === "\r" && n4.charAt(i2 + 1) !== "\n") && (u2++, o2 === 0 && (o2 = i2 + 1)), i2--;
            }
            var a2 = e2 + u2, f2 = t2 - o2;
            return r2[t2] = { line: a2, lineStart: o2 }, { offset: t2, line: a2 + 1, column: f2 + 1 };
          }
          function _(n4) {
            if (!y(n4))
              throw new Error("not a parser: " + n4);
          }
          function L(n4, t2) {
            return typeof n4 == "string" ? n4.charAt(t2) : n4[t2];
          }
          function O(n4) {
            if (typeof n4 != "number")
              throw new Error("not a number: " + n4);
          }
          function k(n4) {
            if (typeof n4 != "function")
              throw new Error("not a function: " + n4);
          }
          function P(n4) {
            if (typeof n4 != "string")
              throw new Error("not a string: " + n4);
          }
          var q = 2, A = 3, I = 8, F = 5 * I, M = 4 * I, z = "  ";
          function R(n4, t2) {
            return new Array(t2 + 1).join(n4);
          }
          function U(n4, t2, r2) {
            var e2 = t2 - n4.length;
            return e2 <= 0 ? n4 : R(r2, e2) + n4;
          }
          function W(n4, t2, r2, e2) {
            return { from: n4 - t2 > 0 ? n4 - t2 : 0, to: n4 + r2 > e2 ? e2 : n4 + r2 };
          }
          function D(n4, t2) {
            var r2, e2, u2, o2, f2, c2 = t2.index, s4 = c2.offset, l4 = 1;
            if (s4 === n4.length)
              return "Got the end of the input";
            if (w(n4)) {
              var h2 = s4 - s4 % I, p2 = s4 - h2, d2 = W(h2, F, M + I, n4.length), v2 = a(function(n5) {
                return a(function(n6) {
                  return U(n6.toString(16), 2, "0");
                }, n5);
              }, function(n5, t3) {
                var r3 = n5.length, e3 = [], u3 = 0;
                if (r3 <= t3)
                  return [n5.slice()];
                for (var o3 = 0; o3 < r3; o3++)
                  e3[u3] || e3.push([]), e3[u3].push(n5[o3]), (o3 + 1) % t3 == 0 && u3++;
                return e3;
              }(n4.slice(d2.from, d2.to).toJSON().data, I));
              o2 = function(n5) {
                return n5.from === 0 && n5.to === 1 ? { from: n5.from, to: n5.to } : { from: n5.from / I, to: Math.floor(n5.to / I) };
              }(d2), e2 = h2 / I, r2 = 3 * p2, p2 >= 4 && (r2 += 1), l4 = 2, u2 = a(function(n5) {
                return n5.length <= 4 ? n5.join(" ") : n5.slice(0, 4).join(" ") + "  " + n5.slice(4).join(" ");
              }, v2), (f2 = (8 * (o2.to > 0 ? o2.to - 1 : o2.to)).toString(16).length) < 2 && (f2 = 2);
            } else {
              var g2 = n4.split(/\r\n|[\n\r\u2028\u2029]/);
              r2 = c2.column - 1, e2 = c2.line - 1, o2 = W(e2, q, A, g2.length), u2 = g2.slice(o2.from, o2.to), f2 = o2.to.toString().length;
            }
            var m2 = e2 - o2.from;
            return w(n4) && (f2 = (8 * (o2.to > 0 ? o2.to - 1 : o2.to)).toString(16).length) < 2 && (f2 = 2), i(function(t3, e3, u3) {
              var i2, a2 = u3 === m2, c3 = a2 ? "> " : z;
              return i2 = w(n4) ? U((8 * (o2.from + u3)).toString(16), f2, "0") : U((o2.from + u3 + 1).toString(), f2, " "), [].concat(t3, [c3 + i2 + " | " + e3], a2 ? [z + R(" ", f2) + " | " + U("", r2, " ") + R("^", l4)] : []);
            }, [], u2).join("\n");
          }
          function N(n4, t2) {
            return ["\n", "-- PARSING FAILED " + R("-", 50), "\n\n", D(n4, t2), "\n\n", (r2 = t2.expected, r2.length === 1 ? "Expected:\n\n" + r2[0] : "Expected one of the following: \n\n" + r2.join(", ")), "\n"].join("");
            var r2;
          }
          function G(n4) {
            return n4.flags !== void 0 ? n4.flags : [n4.global ? "g" : "", n4.ignoreCase ? "i" : "", n4.multiline ? "m" : "", n4.unicode ? "u" : "", n4.sticky ? "y" : ""].join("");
          }
          function C() {
            for (var n4 = [].slice.call(arguments), t2 = n4.length, r2 = 0; r2 < t2; r2 += 1)
              _(n4[r2]);
            return e(function(r3, e2) {
              for (var u2, o2 = new Array(t2), i2 = 0; i2 < t2; i2 += 1) {
                if (!(u2 = B(n4[i2]._(r3, e2), u2)).status)
                  return u2;
                o2[i2] = u2.value, e2 = u2.index;
              }
              return B(b(e2, o2), u2);
            });
          }
          function J() {
            var n4 = [].slice.call(arguments);
            if (n4.length === 0)
              throw new Error("seqMap needs at least one argument");
            var t2 = n4.pop();
            return k(t2), C.apply(null, n4).map(function(n5) {
              return t2.apply(null, n5);
            });
          }
          function T() {
            var n4 = [].slice.call(arguments), t2 = n4.length;
            if (t2 === 0)
              return Y("zero alternates");
            for (var r2 = 0; r2 < t2; r2 += 1)
              _(n4[r2]);
            return e(function(t3, r3) {
              for (var e2, u2 = 0; u2 < n4.length; u2 += 1)
                if ((e2 = B(n4[u2]._(t3, r3), e2)).status)
                  return e2;
              return e2;
            });
          }
          function V(n4, t2) {
            return H(n4, t2).or(X([]));
          }
          function H(n4, t2) {
            return _(n4), _(t2), J(n4, t2.then(n4).many(), function(n5, t3) {
              return [n5].concat(t3);
            });
          }
          function K(n4) {
            P(n4);
            var t2 = "'" + n4 + "'";
            return e(function(r2, e2) {
              var u2 = e2 + n4.length, o2 = r2.slice(e2, u2);
              return o2 === n4 ? b(u2, o2) : x(e2, t2);
            });
          }
          function Q(n4, t2) {
            !function(n5) {
              if (!(n5 instanceof RegExp))
                throw new Error("not a regexp: " + n5);
              for (var t3 = G(n5), r3 = 0; r3 < t3.length; r3++) {
                var e2 = t3.charAt(r3);
                if (e2 !== "i" && e2 !== "m" && e2 !== "u" && e2 !== "s")
                  throw new Error('unsupported regexp flag "' + e2 + '": ' + n5);
              }
            }(n4), arguments.length >= 2 ? O(t2) : t2 = 0;
            var r2 = function(n5) {
              return RegExp("^(?:" + n5.source + ")", G(n5));
            }(n4), u2 = "" + n4;
            return e(function(n5, e2) {
              var o2 = r2.exec(n5.slice(e2));
              if (o2) {
                if (0 <= t2 && t2 <= o2.length) {
                  var i2 = o2[0], a2 = o2[t2];
                  return b(e2 + i2.length, a2);
                }
                return x(e2, "valid match group (0 to " + o2.length + ") in " + u2);
              }
              return x(e2, u2);
            });
          }
          function X(n4) {
            return e(function(t2, r2) {
              return b(r2, n4);
            });
          }
          function Y(n4) {
            return e(function(t2, r2) {
              return x(r2, n4);
            });
          }
          function Z(n4) {
            if (y(n4))
              return e(function(t2, r2) {
                var e2 = n4._(t2, r2);
                return e2.index = r2, e2.value = "", e2;
              });
            if (typeof n4 == "string")
              return Z(K(n4));
            if (n4 instanceof RegExp)
              return Z(Q(n4));
            throw new Error("not a string, regexp, or parser: " + n4);
          }
          function $(n4) {
            return _(n4), e(function(t2, r2) {
              var e2 = n4._(t2, r2), u2 = t2.slice(r2, e2.index);
              return e2.status ? x(r2, 'not "' + u2 + '"') : b(r2, null);
            });
          }
          function nn(n4) {
            return k(n4), e(function(t2, r2) {
              var e2 = L(t2, r2);
              return r2 < t2.length && n4(e2) ? b(r2 + 1, e2) : x(r2, "a character/byte matching " + n4);
            });
          }
          function tn(n4, t2) {
            arguments.length < 2 && (t2 = n4, n4 = void 0);
            var r2 = e(function(n5, e2) {
              return r2._ = t2()._, r2._(n5, e2);
            });
            return n4 ? r2.desc(n4) : r2;
          }
          function rn() {
            return Y("fantasy-land/empty");
          }
          u.parse = function(n4) {
            if (typeof n4 != "string" && !w(n4))
              throw new Error(".parse must be called with a string or Buffer as its argument");
            var t2, r2 = this.skip(an)._(n4, 0);
            return t2 = r2.status ? { status: true, value: r2.value } : { status: false, index: S(n4, r2.furthest), expected: r2.expected }, delete j[n4], t2;
          }, u.tryParse = function(n4) {
            var t2 = this.parse(n4);
            if (t2.status)
              return t2.value;
            var r2 = N(n4, t2), e2 = new Error(r2);
            throw e2.type = "ParsimmonError", e2.result = t2, e2;
          }, u.assert = function(n4, t2) {
            return this.chain(function(r2) {
              return n4(r2) ? X(r2) : Y(t2);
            });
          }, u.or = function(n4) {
            return T(this, n4);
          }, u.trim = function(n4) {
            return this.wrap(n4, n4);
          }, u.wrap = function(n4, t2) {
            return J(n4, this, t2, function(n5, t3) {
              return t3;
            });
          }, u.thru = function(n4) {
            return n4(this);
          }, u.then = function(n4) {
            return _(n4), C(this, n4).map(function(n5) {
              return n5[1];
            });
          }, u.many = function() {
            var n4 = this;
            return e(function(t2, r2) {
              for (var e2 = [], u2 = void 0; ; ) {
                if (!(u2 = B(n4._(t2, r2), u2)).status)
                  return B(b(r2, e2), u2);
                if (r2 === u2.index)
                  throw new Error("infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause");
                r2 = u2.index, e2.push(u2.value);
              }
            });
          }, u.tieWith = function(n4) {
            return P(n4), this.map(function(t2) {
              if (function(n5) {
                if (!E(n5))
                  throw new Error("not an array: " + n5);
              }(t2), t2.length) {
                P(t2[0]);
                for (var r2 = t2[0], e2 = 1; e2 < t2.length; e2++)
                  P(t2[e2]), r2 += n4 + t2[e2];
                return r2;
              }
              return "";
            });
          }, u.tie = function() {
            return this.tieWith("");
          }, u.times = function(n4, t2) {
            var r2 = this;
            return arguments.length < 2 && (t2 = n4), O(n4), O(t2), e(function(e2, u2) {
              for (var o2 = [], i2 = void 0, a2 = void 0, f2 = 0; f2 < n4; f2 += 1) {
                if (a2 = B(i2 = r2._(e2, u2), a2), !i2.status)
                  return a2;
                u2 = i2.index, o2.push(i2.value);
              }
              for (; f2 < t2 && (a2 = B(i2 = r2._(e2, u2), a2), i2.status); f2 += 1)
                u2 = i2.index, o2.push(i2.value);
              return B(b(u2, o2), a2);
            });
          }, u.result = function(n4) {
            return this.map(function() {
              return n4;
            });
          }, u.atMost = function(n4) {
            return this.times(0, n4);
          }, u.atLeast = function(n4) {
            return J(this.times(n4), this.many(), function(n5, t2) {
              return n5.concat(t2);
            });
          }, u.map = function(n4) {
            k(n4);
            var t2 = this;
            return e(function(r2, e2) {
              var u2 = t2._(r2, e2);
              return u2.status ? B(b(u2.index, n4(u2.value)), u2) : u2;
            });
          }, u.contramap = function(n4) {
            k(n4);
            var t2 = this;
            return e(function(r2, e2) {
              var u2 = t2.parse(n4(r2.slice(e2)));
              return u2.status ? b(e2 + r2.length, u2.value) : u2;
            });
          }, u.promap = function(n4, t2) {
            return k(n4), k(t2), this.contramap(n4).map(t2);
          }, u.skip = function(n4) {
            return C(this, n4).map(function(n5) {
              return n5[0];
            });
          }, u.mark = function() {
            return J(en, this, en, function(n4, t2, r2) {
              return { start: n4, value: t2, end: r2 };
            });
          }, u.node = function(n4) {
            return J(en, this, en, function(t2, r2, e2) {
              return { name: n4, value: r2, start: t2, end: e2 };
            });
          }, u.sepBy = function(n4) {
            return V(this, n4);
          }, u.sepBy1 = function(n4) {
            return H(this, n4);
          }, u.lookahead = function(n4) {
            return this.skip(Z(n4));
          }, u.notFollowedBy = function(n4) {
            return this.skip($(n4));
          }, u.desc = function(n4) {
            E(n4) || (n4 = [n4]);
            var t2 = this;
            return e(function(r2, e2) {
              var u2 = t2._(r2, e2);
              return u2.status || (u2.expected = n4), u2;
            });
          }, u.fallback = function(n4) {
            return this.or(X(n4));
          }, u.ap = function(n4) {
            return J(n4, this, function(n5, t2) {
              return n5(t2);
            });
          }, u.chain = function(n4) {
            var t2 = this;
            return e(function(r2, e2) {
              var u2 = t2._(r2, e2);
              return u2.status ? B(n4(u2.value)._(r2, u2.index), u2) : u2;
            });
          }, u.concat = u.or, u.empty = rn, u.of = X, u["fantasy-land/ap"] = u.ap, u["fantasy-land/chain"] = u.chain, u["fantasy-land/concat"] = u.concat, u["fantasy-land/empty"] = u.empty, u["fantasy-land/of"] = u.of, u["fantasy-land/map"] = u.map;
          var en = e(function(n4, t2) {
            return b(t2, S(n4, t2));
          }), un = e(function(n4, t2) {
            return t2 >= n4.length ? x(t2, "any character/byte") : b(t2 + 1, L(n4, t2));
          }), on = e(function(n4, t2) {
            return b(n4.length, n4.slice(t2));
          }), an = e(function(n4, t2) {
            return t2 < n4.length ? x(t2, "EOF") : b(t2, null);
          }), fn = Q(/[0-9]/).desc("a digit"), cn = Q(/[0-9]*/).desc("optional digits"), sn = Q(/[a-z]/i).desc("a letter"), ln = Q(/[a-z]*/i).desc("optional letters"), hn = Q(/\s*/).desc("optional whitespace"), pn = Q(/\s+/).desc("whitespace"), dn = K("\r"), vn = K("\n"), gn = K("\r\n"), mn = T(gn, vn, dn).desc("newline"), yn = T(mn, an);
          e.all = on, e.alt = T, e.any = un, e.cr = dn, e.createLanguage = function(n4) {
            var t2 = {};
            for (var r2 in n4)
              ({}).hasOwnProperty.call(n4, r2) && function(r3) {
                t2[r3] = tn(function() {
                  return n4[r3](t2);
                });
              }(r2);
            return t2;
          }, e.crlf = gn, e.custom = function(n4) {
            return e(n4(b, x));
          }, e.digit = fn, e.digits = cn, e.empty = rn, e.end = yn, e.eof = an, e.fail = Y, e.formatError = N, e.index = en, e.isParser = y, e.lazy = tn, e.letter = sn, e.letters = ln, e.lf = vn, e.lookahead = Z, e.makeFailure = x, e.makeSuccess = b, e.newline = mn, e.noneOf = function(n4) {
            return nn(function(t2) {
              return n4.indexOf(t2) < 0;
            }).desc("none of '" + n4 + "'");
          }, e.notFollowedBy = $, e.of = X, e.oneOf = function(n4) {
            for (var t2 = n4.split(""), r2 = 0; r2 < t2.length; r2++)
              t2[r2] = "'" + t2[r2] + "'";
            return nn(function(t3) {
              return n4.indexOf(t3) >= 0;
            }).desc(t2);
          }, e.optWhitespace = hn, e.Parser = e, e.range = function(n4, t2) {
            return nn(function(r2) {
              return n4 <= r2 && r2 <= t2;
            }).desc(n4 + "-" + t2);
          }, e.regex = Q, e.regexp = Q, e.sepBy = V, e.sepBy1 = H, e.seq = C, e.seqMap = J, e.seqObj = function() {
            for (var n4, t2 = {}, r2 = 0, u2 = (n4 = arguments, Array.prototype.slice.call(n4)), o2 = u2.length, i2 = 0; i2 < o2; i2 += 1) {
              var a2 = u2[i2];
              if (!y(a2)) {
                if (E(a2) && a2.length === 2 && typeof a2[0] == "string" && y(a2[1])) {
                  var f2 = a2[0];
                  if (Object.prototype.hasOwnProperty.call(t2, f2))
                    throw new Error("seqObj: duplicate key " + f2);
                  t2[f2] = true, r2++;
                  continue;
                }
                throw new Error("seqObj arguments must be parsers or [string, parser] array pairs.");
              }
            }
            if (r2 === 0)
              throw new Error("seqObj expects at least one named parser, found zero");
            return e(function(n5, t3) {
              for (var r3, e2 = {}, i3 = 0; i3 < o2; i3 += 1) {
                var a3, f3;
                if (E(u2[i3]) ? (a3 = u2[i3][0], f3 = u2[i3][1]) : (a3 = null, f3 = u2[i3]), !(r3 = B(f3._(n5, t3), r3)).status)
                  return r3;
                a3 && (e2[a3] = r3.value), t3 = r3.index;
              }
              return B(b(t3, e2), r3);
            });
          }, e.string = K, e.succeed = X, e.takeWhile = function(n4) {
            return k(n4), e(function(t2, r2) {
              for (var e2 = r2; e2 < t2.length && n4(L(t2, e2)); )
                e2++;
              return b(e2, t2.slice(r2, e2));
            });
          }, e.test = nn, e.whitespace = pn, e["fantasy-land/empty"] = rn, e["fantasy-land/of"] = X, e.Binary = { bitSeq: l3, bitSeqObj: function(n4) {
            s3();
            var t2 = {}, r2 = 0, e2 = a(function(n5) {
              if (E(n5)) {
                var e3 = n5;
                if (e3.length !== 2)
                  throw new Error("[" + e3.join(", ") + "] should be length 2, got length " + e3.length);
                if (P(e3[0]), O(e3[1]), Object.prototype.hasOwnProperty.call(t2, e3[0]))
                  throw new Error("duplicate key in bitSeqObj: " + e3[0]);
                return t2[e3[0]] = true, r2++, e3;
              }
              return O(n5), [null, n5];
            }, n4);
            if (r2 < 1)
              throw new Error("bitSeqObj expects at least one named pair, got [" + n4.join(", ") + "]");
            var u2 = a(function(n5) {
              return n5[0];
            }, e2);
            return l3(a(function(n5) {
              return n5[1];
            }, e2)).map(function(n5) {
              return i(function(n6, t3) {
                return t3[0] !== null && (n6[t3[0]] = t3[1]), n6;
              }, {}, a(function(t3, r3) {
                return [t3, n5[r3]];
              }, u2));
            });
          }, byte: function(n4) {
            if (s3(), O(n4), n4 > 255)
              throw new Error("Value specified to byte constructor (" + n4 + "=0x" + n4.toString(16) + ") is larger in value than a single byte.");
            var t2 = (n4 > 15 ? "0x" : "0x0") + n4.toString(16);
            return e(function(r2, e2) {
              var u2 = L(r2, e2);
              return u2 === n4 ? b(e2 + 1, u2) : x(e2, t2);
            });
          }, buffer: function(n4) {
            return h("buffer", n4).map(function(n5) {
              return Buffer.from(n5);
            });
          }, encodedString: function(n4, t2) {
            return h("string", t2).map(function(t3) {
              return t3.toString(n4);
            });
          }, uintBE: d, uint8BE: d(1), uint16BE: d(2), uint32BE: d(4), uintLE: v, uint8LE: v(1), uint16LE: v(2), uint32LE: v(4), intBE: g, int8BE: g(1), int16BE: g(2), int32BE: g(4), intLE: m, int8LE: m(1), int16LE: m(2), int32LE: m(4), floatBE: h("floatBE", 4).map(function(n4) {
            return n4.readFloatBE(0);
          }), floatLE: h("floatLE", 4).map(function(n4) {
            return n4.readFloatLE(0);
          }), doubleBE: h("doubleBE", 8).map(function(n4) {
            return n4.readDoubleBE(0);
          }), doubleLE: h("doubleLE", 8).map(function(n4) {
            return n4.readDoubleLE(0);
          }) }, n3.exports = e;
        }]);
      });
    })(parsimmon_umd_min, parsimmon_umd_min.exports);
    var parsimmon_umd_minExports = parsimmon_umd_min.exports;
    var emojiRegex = () => {
      return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
    };
    function normalizeDuration(dur) {
      if (dur === void 0 || dur === null)
        return dur;
      return dur.shiftToAll().normalize();
    }
    function getFileTitle(path) {
      if (path.includes("/"))
        path = path.substring(path.lastIndexOf("/") + 1);
      if (path.endsWith(".md"))
        path = path.substring(0, path.length - 3);
      return path;
    }
    parsimmon_umd_minExports.alt(parsimmon_umd_minExports.regex(new RegExp(emojiRegex(), "")), parsimmon_umd_minExports.regex(/[0-9\p{Letter}_-]+/u).map((str) => str.toLocaleLowerCase()), parsimmon_umd_minExports.whitespace.map((_) => "-"), parsimmon_umd_minExports.any.map((_) => "")).many().map((result) => result.join(""));
    var HEADER_CANONICALIZER = parsimmon_umd_minExports.alt(parsimmon_umd_minExports.regex(new RegExp(emojiRegex(), "")), parsimmon_umd_minExports.regex(/[0-9\p{Letter}_-]+/u), parsimmon_umd_minExports.whitespace.map((_) => " "), parsimmon_umd_minExports.any.map((_) => " ")).many().map((result) => {
      return result.join("").split(/\s+/).join(" ").trim();
    });
    function normalizeHeaderForLink(header) {
      return HEADER_CANONICALIZER.tryParse(header);
    }
    function renderMinimalDuration(dur) {
      dur = normalizeDuration(dur);
      dur = Duration2.fromObject(Object.fromEntries(Object.entries(dur.toObject()).filter(([, quantity]) => quantity != 0)));
      return dur.toHuman();
    }
    var Values;
    (function(Values2) {
      function toString(field, setting = DEFAULT_QUERY_SETTINGS, recursive = false) {
        let wrapped = wrapValue(field);
        if (!wrapped)
          return setting.renderNullAs;
        switch (wrapped.type) {
          case "null":
            return setting.renderNullAs;
          case "string":
            return wrapped.value;
          case "number":
          case "boolean":
            return "" + wrapped.value;
          case "html":
            return wrapped.value.outerHTML;
          case "widget":
            return wrapped.value.markdown();
          case "link":
            return wrapped.value.markdown();
          case "function":
            return "<function>";
          case "array":
            let result = "";
            if (recursive)
              result += "[";
            result += wrapped.value.map((f) => toString(f, setting, true)).join(", ");
            if (recursive)
              result += "]";
            return result;
          case "object":
            return "{ " + Object.entries(wrapped.value).map((e) => e[0] + ": " + toString(e[1], setting, true)).join(", ") + " }";
          case "date":
            if (wrapped.value.second == 0 && wrapped.value.hour == 0 && wrapped.value.minute == 0) {
              return wrapped.value.toFormat(setting.defaultDateFormat);
            }
            return wrapped.value.toFormat(setting.defaultDateTimeFormat);
          case "duration":
            return renderMinimalDuration(wrapped.value);
        }
      }
      Values2.toString = toString;
      function wrapValue(val) {
        if (isNull(val))
          return { type: "null", value: val };
        else if (isNumber3(val))
          return { type: "number", value: val };
        else if (isString3(val))
          return { type: "string", value: val };
        else if (isBoolean(val))
          return { type: "boolean", value: val };
        else if (isDuration(val))
          return { type: "duration", value: val };
        else if (isDate3(val))
          return { type: "date", value: val };
        else if (isWidget(val))
          return { type: "widget", value: val };
        else if (isArray(val))
          return { type: "array", value: val };
        else if (isLink(val))
          return { type: "link", value: val };
        else if (isFunction(val))
          return { type: "function", value: val };
        else if (isHtml(val))
          return { type: "html", value: val };
        else if (isObject(val))
          return { type: "object", value: val };
        else
          return void 0;
      }
      Values2.wrapValue = wrapValue;
      function mapLeaves(val, func) {
        if (isObject(val)) {
          let result = {};
          for (let [key, value] of Object.entries(val))
            result[key] = mapLeaves(value, func);
          return result;
        } else if (isArray(val)) {
          let result = [];
          for (let value of val)
            result.push(mapLeaves(value, func));
          return result;
        } else {
          return func(val);
        }
      }
      Values2.mapLeaves = mapLeaves;
      function compareValue(val1, val2, linkNormalizer) {
        var _a, _b;
        if (val1 === void 0)
          val1 = null;
        if (val2 === void 0)
          val2 = null;
        if (val1 === null && val2 === null)
          return 0;
        else if (val1 === null)
          return -1;
        else if (val2 === null)
          return 1;
        let wrap1 = wrapValue(val1);
        let wrap2 = wrapValue(val2);
        if (wrap1 === void 0 && wrap2 === void 0)
          return 0;
        else if (wrap1 === void 0)
          return -1;
        else if (wrap2 === void 0)
          return 1;
        if (wrap1.type != wrap2.type)
          return wrap1.type.localeCompare(wrap2.type);
        if (wrap1.value === wrap2.value)
          return 0;
        switch (wrap1.type) {
          case "string":
            return wrap1.value.localeCompare(wrap2.value);
          case "number":
            if (wrap1.value < wrap2.value)
              return -1;
            else if (wrap1.value == wrap2.value)
              return 0;
            return 1;
          case "null":
            return 0;
          case "boolean":
            if (wrap1.value == wrap2.value)
              return 0;
            else
              return wrap1.value ? 1 : -1;
          case "link":
            let link1 = wrap1.value;
            let link2 = wrap2.value;
            let normalize = linkNormalizer != null ? linkNormalizer : (x) => x;
            let pathCompare = normalize(link1.path).localeCompare(normalize(link2.path));
            if (pathCompare != 0)
              return pathCompare;
            let typeCompare = link1.type.localeCompare(link2.type);
            if (typeCompare != 0)
              return typeCompare;
            if (link1.subpath && !link2.subpath)
              return 1;
            if (!link1.subpath && link2.subpath)
              return -1;
            if (!link1.subpath && !link2.subpath)
              return 0;
            return ((_a = link1.subpath) != null ? _a : "").localeCompare((_b = link2.subpath) != null ? _b : "");
          case "date":
            return wrap1.value < wrap2.value ? -1 : wrap1.value.equals(wrap2.value) ? 0 : 1;
          case "duration":
            return wrap1.value < wrap2.value ? -1 : wrap1.value.equals(wrap2.value) ? 0 : 1;
          case "array":
            let f1 = wrap1.value;
            let f2 = wrap2.value;
            for (let index = 0; index < Math.min(f1.length, f2.length); index++) {
              let comp = compareValue(f1[index], f2[index]);
              if (comp != 0)
                return comp;
            }
            return f1.length - f2.length;
          case "object":
            let o1 = wrap1.value;
            let o2 = wrap2.value;
            let k1 = Array.from(Object.keys(o1));
            let k2 = Array.from(Object.keys(o2));
            k1.sort();
            k2.sort();
            let keyCompare = compareValue(k1, k2);
            if (keyCompare != 0)
              return keyCompare;
            for (let key of k1) {
              let comp = compareValue(o1[key], o2[key]);
              if (comp != 0)
                return comp;
            }
            return 0;
          case "widget":
          case "html":
          case "function":
            return 0;
        }
      }
      Values2.compareValue = compareValue;
      function typeOf(val) {
        var _a;
        return (_a = wrapValue(val)) == null ? void 0 : _a.type;
      }
      Values2.typeOf = typeOf;
      function isTruthy(field) {
        let wrapped = wrapValue(field);
        if (!wrapped)
          return false;
        switch (wrapped.type) {
          case "number":
            return wrapped.value != 0;
          case "string":
            return wrapped.value.length > 0;
          case "boolean":
            return wrapped.value;
          case "link":
            return !!wrapped.value.path;
          case "date":
            return wrapped.value.toMillis() != 0;
          case "duration":
            return wrapped.value.as("seconds") != 0;
          case "object":
            return Object.keys(wrapped.value).length > 0;
          case "array":
            return wrapped.value.length > 0;
          case "null":
            return false;
          case "html":
          case "widget":
          case "function":
            return true;
        }
      }
      Values2.isTruthy = isTruthy;
      function deepCopy(field) {
        if (field === null || field === void 0)
          return field;
        if (Values2.isArray(field)) {
          return [].concat(field.map((v) => deepCopy(v)));
        } else if (Values2.isObject(field)) {
          let result = {};
          for (let [key, value] of Object.entries(field))
            result[key] = deepCopy(value);
          return result;
        } else {
          return field;
        }
      }
      Values2.deepCopy = deepCopy;
      function isString3(val) {
        return typeof val == "string";
      }
      Values2.isString = isString3;
      function isNumber3(val) {
        return typeof val == "number";
      }
      Values2.isNumber = isNumber3;
      function isDate3(val) {
        return val instanceof DateTime2;
      }
      Values2.isDate = isDate3;
      function isDuration(val) {
        return val instanceof Duration2;
      }
      Values2.isDuration = isDuration;
      function isNull(val) {
        return val === null || val === void 0;
      }
      Values2.isNull = isNull;
      function isArray(val) {
        return Array.isArray(val);
      }
      Values2.isArray = isArray;
      function isBoolean(val) {
        return typeof val === "boolean";
      }
      Values2.isBoolean = isBoolean;
      function isLink(val) {
        return val instanceof Link;
      }
      Values2.isLink = isLink;
      function isWidget(val) {
        return val instanceof Widget;
      }
      Values2.isWidget = isWidget;
      function isHtml(val) {
        if (typeof HTMLElement !== "undefined") {
          return val instanceof HTMLElement;
        } else {
          return false;
        }
      }
      Values2.isHtml = isHtml;
      function isObject(val) {
        return typeof val == "object" && !isHtml(val) && !isWidget(val) && !isArray(val) && !isDuration(val) && !isDate3(val) && !isLink(val) && val !== void 0 && !isNull(val);
      }
      Values2.isObject = isObject;
      function isFunction(val) {
        return typeof val == "function";
      }
      Values2.isFunction = isFunction;
    })(Values || (Values = {}));
    var Groupings;
    (function(Groupings2) {
      function isElementGroup(entry) {
        return Values.isObject(entry) && Object.keys(entry).length == 2 && "key" in entry && "rows" in entry;
      }
      Groupings2.isElementGroup = isElementGroup;
      function isGrouping(entry) {
        for (let element of entry)
          if (!isElementGroup(element))
            return false;
        return true;
      }
      Groupings2.isGrouping = isGrouping;
      function count(elements) {
        if (isGrouping(elements)) {
          let result = 0;
          for (let subgroup of elements)
            result += count(subgroup.rows);
          return result;
        } else {
          return elements.length;
        }
      }
      Groupings2.count = count;
    })(Groupings || (Groupings = {}));
    var Link = class {
      constructor(fields) {
        __publicField(this, "path");
        __publicField(this, "display");
        __publicField(this, "subpath");
        __publicField(this, "embed");
        __publicField(this, "type");
        Object.assign(this, fields);
      }
      static file(path, embed = false, display) {
        return new Link({
          path,
          embed,
          display,
          subpath: void 0,
          type: "file"
        });
      }
      static infer(linkpath, embed = false, display) {
        if (linkpath.includes("#^")) {
          let split = linkpath.split("#^");
          return Link.block(split[0], split[1], embed, display);
        } else if (linkpath.includes("#")) {
          let split = linkpath.split("#");
          return Link.header(split[0], split[1], embed, display);
        } else
          return Link.file(linkpath, embed, display);
      }
      static header(path, header, embed, display) {
        return new Link({
          path,
          embed,
          display,
          subpath: normalizeHeaderForLink(header),
          type: "header"
        });
      }
      static block(path, blockId, embed, display) {
        return new Link({
          path,
          embed,
          display,
          subpath: blockId,
          type: "block"
        });
      }
      static fromObject(object) {
        return new Link(object);
      }
      equals(other) {
        if (other == void 0 || other == null)
          return false;
        return this.path == other.path && this.type == other.type && this.subpath == other.subpath;
      }
      toString() {
        return this.markdown();
      }
      toObject() {
        return { path: this.path, type: this.type, subpath: this.subpath, display: this.display, embed: this.embed };
      }
      withPath(path) {
        return new Link(Object.assign({}, this, { path }));
      }
      withDisplay(display) {
        return new Link(Object.assign({}, this, { display }));
      }
      withHeader(header) {
        return Link.header(this.path, header, this.embed, this.display);
      }
      toFile() {
        return Link.file(this.path, this.embed, this.display);
      }
      toEmbed() {
        if (this.embed) {
          return this;
        } else {
          let link = new Link(this);
          link.embed = true;
          return link;
        }
      }
      fromEmbed() {
        if (!this.embed) {
          return this;
        } else {
          let link = new Link(this);
          link.embed = false;
          return link;
        }
      }
      markdown() {
        let result = (this.embed ? "!" : "") + "[[" + this.obsidianLink();
        if (this.display) {
          result += "|" + this.display;
        } else {
          result += "|" + getFileTitle(this.path);
          if (this.type == "header" || this.type == "block")
            result += " > " + this.subpath;
        }
        result += "]]";
        return result;
      }
      obsidianLink() {
        var _a, _b;
        const escaped = this.path.replaceAll("|", "\\|");
        if (this.type == "header")
          return escaped + "#" + ((_a = this.subpath) == null ? void 0 : _a.replaceAll("|", "\\|"));
        if (this.type == "block")
          return escaped + "#^" + ((_b = this.subpath) == null ? void 0 : _b.replaceAll("|", "\\|"));
        else
          return escaped;
      }
      fileName() {
        return getFileTitle(this.path).replace(".md", "");
      }
    };
    var Widget = class {
      constructor($widget) {
        __publicField(this, "$widget");
        this.$widget = $widget;
      }
    };
    var ListPairWidget = class extends Widget {
      constructor(key, value) {
        super("dataview:list-pair");
        __publicField(this, "key");
        __publicField(this, "value");
        this.key = key;
        this.value = value;
      }
      markdown() {
        return `${Values.toString(this.key)}: ${Values.toString(this.value)}`;
      }
    };
    var ExternalLinkWidget = class extends Widget {
      constructor(url, display) {
        super("dataview:external-link");
        __publicField(this, "url");
        __publicField(this, "display");
        this.url = url;
        this.display = display;
      }
      markdown() {
        var _a;
        return `[${(_a = this.display) != null ? _a : this.url}](${this.url})`;
      }
    };
    var Widgets;
    (function(Widgets2) {
      function listPair(key, value) {
        return new ListPairWidget(key, value);
      }
      Widgets2.listPair = listPair;
      function externalLink(url, display) {
        return new ExternalLinkWidget(url, display);
      }
      Widgets2.externalLink = externalLink;
      function isListPair(widget) {
        return widget.$widget === "dataview:list-pair";
      }
      Widgets2.isListPair = isListPair;
      function isExternalLink(widget) {
        return widget.$widget === "dataview:external-link";
      }
      Widgets2.isExternalLink = isExternalLink;
      function isBuiltin(widget) {
        return isListPair(widget) || isExternalLink(widget);
      }
      Widgets2.isBuiltin = isBuiltin;
    })(Widgets || (Widgets = {}));
    var Fields;
    (function(Fields2) {
      function variable(name) {
        return { type: "variable", name };
      }
      Fields2.variable = variable;
      function literal(value) {
        return { type: "literal", value };
      }
      Fields2.literal = literal;
      function binaryOp(left, op, right) {
        return { type: "binaryop", left, op, right };
      }
      Fields2.binaryOp = binaryOp;
      function index(obj, index2) {
        return { type: "index", object: obj, index: index2 };
      }
      Fields2.index = index;
      function indexVariable(name) {
        let parts = name.split(".");
        let result = Fields2.variable(parts[0]);
        for (let index2 = 1; index2 < parts.length; index2++) {
          result = Fields2.index(result, Fields2.literal(parts[index2]));
        }
        return result;
      }
      Fields2.indexVariable = indexVariable;
      function lambda(args, value) {
        return { type: "lambda", arguments: args, value };
      }
      Fields2.lambda = lambda;
      function func(func2, args) {
        return { type: "function", func: func2, arguments: args };
      }
      Fields2.func = func;
      function list(values) {
        return { type: "list", values };
      }
      Fields2.list = list;
      function object(values) {
        return { type: "object", values };
      }
      Fields2.object = object;
      function negate(child) {
        return { type: "negated", child };
      }
      Fields2.negate = negate;
      function isCompareOp(op) {
        return op == "<=" || op == "<" || op == ">" || op == ">=" || op == "!=" || op == "=";
      }
      Fields2.isCompareOp = isCompareOp;
      Fields2.NULL = Fields2.literal(null);
    })(Fields || (Fields = {}));
    var Sources;
    (function(Sources2) {
      function tag(tag2) {
        return { type: "tag", tag: tag2 };
      }
      Sources2.tag = tag;
      function csv(path) {
        return { type: "csv", path };
      }
      Sources2.csv = csv;
      function folder(prefix) {
        return { type: "folder", folder: prefix };
      }
      Sources2.folder = folder;
      function link(file, incoming) {
        return { type: "link", file, direction: incoming ? "incoming" : "outgoing" };
      }
      Sources2.link = link;
      function binaryOp(left, op, right) {
        return { type: "binaryop", left, op, right };
      }
      Sources2.binaryOp = binaryOp;
      function and(left, right) {
        return { type: "binaryop", left, op: "&", right };
      }
      Sources2.and = and;
      function or(left, right) {
        return { type: "binaryop", left, op: "|", right };
      }
      Sources2.or = or;
      function negate(child) {
        return { type: "negate", child };
      }
      Sources2.negate = negate;
      function empty() {
        return { type: "empty" };
      }
      Sources2.empty = empty;
    })(Sources || (Sources = {}));
    var EMOJI_REGEX = new RegExp(emojiRegex(), "");
    var DURATION_TYPES = {
      year: Duration2.fromObject({ years: 1 }),
      years: Duration2.fromObject({ years: 1 }),
      yr: Duration2.fromObject({ years: 1 }),
      yrs: Duration2.fromObject({ years: 1 }),
      month: Duration2.fromObject({ months: 1 }),
      months: Duration2.fromObject({ months: 1 }),
      mo: Duration2.fromObject({ months: 1 }),
      mos: Duration2.fromObject({ months: 1 }),
      week: Duration2.fromObject({ weeks: 1 }),
      weeks: Duration2.fromObject({ weeks: 1 }),
      wk: Duration2.fromObject({ weeks: 1 }),
      wks: Duration2.fromObject({ weeks: 1 }),
      w: Duration2.fromObject({ weeks: 1 }),
      day: Duration2.fromObject({ days: 1 }),
      days: Duration2.fromObject({ days: 1 }),
      d: Duration2.fromObject({ days: 1 }),
      hour: Duration2.fromObject({ hours: 1 }),
      hours: Duration2.fromObject({ hours: 1 }),
      hr: Duration2.fromObject({ hours: 1 }),
      hrs: Duration2.fromObject({ hours: 1 }),
      h: Duration2.fromObject({ hours: 1 }),
      minute: Duration2.fromObject({ minutes: 1 }),
      minutes: Duration2.fromObject({ minutes: 1 }),
      min: Duration2.fromObject({ minutes: 1 }),
      mins: Duration2.fromObject({ minutes: 1 }),
      m: Duration2.fromObject({ minutes: 1 }),
      second: Duration2.fromObject({ seconds: 1 }),
      seconds: Duration2.fromObject({ seconds: 1 }),
      sec: Duration2.fromObject({ seconds: 1 }),
      secs: Duration2.fromObject({ seconds: 1 }),
      s: Duration2.fromObject({ seconds: 1 })
    };
    var DATE_SHORTHANDS = {
      now: () => DateTime2.local(),
      today: () => DateTime2.local().startOf("day"),
      yesterday: () => DateTime2.local().startOf("day").minus(Duration2.fromObject({ days: 1 })),
      tomorrow: () => DateTime2.local().startOf("day").plus(Duration2.fromObject({ days: 1 })),
      sow: () => DateTime2.local().startOf("week"),
      "start-of-week": () => DateTime2.local().startOf("week"),
      eow: () => DateTime2.local().endOf("week"),
      "end-of-week": () => DateTime2.local().endOf("week"),
      soy: () => DateTime2.local().startOf("year"),
      "start-of-year": () => DateTime2.local().startOf("year"),
      eoy: () => DateTime2.local().endOf("year"),
      "end-of-year": () => DateTime2.local().endOf("year"),
      som: () => DateTime2.local().startOf("month"),
      "start-of-month": () => DateTime2.local().startOf("month"),
      eom: () => DateTime2.local().endOf("month"),
      "end-of-month": () => DateTime2.local().endOf("month")
    };
    var KEYWORDS = ["FROM", "WHERE", "LIMIT", "GROUP", "FLATTEN"];
    function splitOnUnescapedPipe(link) {
      let pipe = -1;
      while ((pipe = link.indexOf("|", pipe + 1)) >= 0) {
        if (pipe > 0 && link[pipe - 1] == "\\")
          continue;
        return [link.substring(0, pipe).replace(/\\\|/g, "|"), link.substring(pipe + 1)];
      }
      return [link.replace(/\\\|/g, "|"), void 0];
    }
    function parseInnerLink(rawlink) {
      let [link, display] = splitOnUnescapedPipe(rawlink);
      return Link.infer(link, false, display);
    }
    function createBinaryParser(child, sep, combine) {
      return parsimmon_umd_minExports.seqMap(child, parsimmon_umd_minExports.seq(parsimmon_umd_minExports.optWhitespace, sep, parsimmon_umd_minExports.optWhitespace, child).many(), (first, rest) => {
        if (rest.length == 0)
          return first;
        let node = combine(first, rest[0][1], rest[0][3]);
        for (let index = 1; index < rest.length; index++) {
          node = combine(node, rest[index][1], rest[index][3]);
        }
        return node;
      });
    }
    function chainOpt(base, ...funcs) {
      return parsimmon_umd_minExports.custom((success, failure) => {
        return (input, i) => {
          let result = base._(input, i);
          if (!result.status)
            return result;
          for (let func of funcs) {
            let next = func(result.value)._(input, result.index);
            if (!next.status)
              return result;
            result = next;
          }
          return result;
        };
      });
    }
    var EXPRESSION = parsimmon_umd_minExports.createLanguage({
      number: (q) => parsimmon_umd_minExports.regexp(/-?[0-9]+(\.[0-9]+)?/).map((str) => Number.parseFloat(str)).desc("number"),
      string: (q) => parsimmon_umd_minExports.string('"').then(parsimmon_umd_minExports.alt(q.escapeCharacter, parsimmon_umd_minExports.noneOf('"\\')).atLeast(0).map((chars) => chars.join(""))).skip(parsimmon_umd_minExports.string('"')).desc("string"),
      escapeCharacter: (_) => parsimmon_umd_minExports.string("\\").then(parsimmon_umd_minExports.any).map((escaped) => {
        if (escaped === '"')
          return '"';
        if (escaped === "\\")
          return "\\";
        else
          return "\\" + escaped;
      }),
      bool: (_) => parsimmon_umd_minExports.regexp(/true|false|True|False/).map((str) => str.toLowerCase() == "true").desc("boolean ('true' or 'false')"),
      tag: (_) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("#"), parsimmon_umd_minExports.alt(parsimmon_umd_minExports.regexp(/[^\u2000-\u206F\u2E00-\u2E7F'!"#$%&()*+,.:;<=>?@^`{|}~\[\]\\\s]/).desc("text")).many(), (start, rest) => start + rest.join("")).desc("tag ('#hello/stuff')"),
      identifier: (_) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.alt(parsimmon_umd_minExports.regexp(/\p{Letter}/u), parsimmon_umd_minExports.regexp(EMOJI_REGEX).desc("text")), parsimmon_umd_minExports.alt(parsimmon_umd_minExports.regexp(/[0-9\p{Letter}_-]/u), parsimmon_umd_minExports.regexp(EMOJI_REGEX).desc("text")).many(), (first, rest) => first + rest.join("")).desc("variable identifier"),
      link: (_) => parsimmon_umd_minExports.regexp(/\[\[([^\[\]]*?)\]\]/u, 1).map((linkInner) => parseInnerLink(linkInner)).desc("file link"),
      embedLink: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("!").atMost(1), q.link, (p, l3) => {
        if (p.length > 0)
          l3.embed = true;
        return l3;
      }).desc("file link"),
      binaryPlusMinus: (_) => parsimmon_umd_minExports.regexp(/\+|-/).map((str) => str).desc("'+' or '-'"),
      binaryMulDiv: (_) => parsimmon_umd_minExports.regexp(/\*|\/|%/).map((str) => str).desc("'*' or '/' or '%'"),
      binaryCompareOp: (_) => parsimmon_umd_minExports.regexp(/>=|<=|!=|>|<|=/).map((str) => str).desc("'>=' or '<=' or '!=' or '=' or '>' or '<'"),
      binaryBooleanOp: (_) => parsimmon_umd_minExports.regexp(/and|or|&|\|/i).map((str) => {
        if (str.toLowerCase() == "and")
          return "&";
        else if (str.toLowerCase() == "or")
          return "|";
        else
          return str;
      }).desc("'and' or 'or'"),
      rootDate: (_) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.regexp(/\d{4}/), parsimmon_umd_minExports.string("-"), parsimmon_umd_minExports.regexp(/\d{2}/), (year, _2, month) => {
        return DateTime2.fromObject({ year: Number.parseInt(year), month: Number.parseInt(month) });
      }).desc("date in format YYYY-MM[-DDTHH-MM-SS.MS]"),
      dateShorthand: (_) => parsimmon_umd_minExports.alt(...Object.keys(DATE_SHORTHANDS).sort((a, b) => b.length - a.length).map(parsimmon_umd_minExports.string)),
      date: (q) => chainOpt(q.rootDate, (ym) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("-"), parsimmon_umd_minExports.regexp(/\d{2}/), (_, day) => ym.set({ day: Number.parseInt(day) })), (ymd) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("T"), parsimmon_umd_minExports.regexp(/\d{2}/), (_, hour) => ymd.set({ hour: Number.parseInt(hour) })), (ymdh) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string(":"), parsimmon_umd_minExports.regexp(/\d{2}/), (_, minute) => ymdh.set({ minute: Number.parseInt(minute) })), (ymdhm) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string(":"), parsimmon_umd_minExports.regexp(/\d{2}/), (_, second) => ymdhm.set({ second: Number.parseInt(second) })), (ymdhms) => parsimmon_umd_minExports.alt(parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("."), parsimmon_umd_minExports.regexp(/\d{3}/), (_, millisecond) => ymdhms.set({ millisecond: Number.parseInt(millisecond) })), parsimmon_umd_minExports.succeed(ymdhms)), (dt) => parsimmon_umd_minExports.alt(parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("+").or(parsimmon_umd_minExports.string("-")), parsimmon_umd_minExports.regexp(/\d{1,2}(:\d{2})?/), (pm, hr) => dt.setZone("UTC" + pm + hr, { keepLocalTime: true })), parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("Z"), () => dt.setZone("utc", { keepLocalTime: true })), parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("["), parsimmon_umd_minExports.regexp(/[0-9A-Za-z+-\/]+/u), parsimmon_umd_minExports.string("]"), (_a, zone, _b) => dt.setZone(zone, { keepLocalTime: true })))).assert((dt) => dt.isValid, "valid date").desc("date in format YYYY-MM[-DDTHH-MM-SS.MS]"),
      datePlus: (q) => parsimmon_umd_minExports.alt(q.dateShorthand.map((d) => DATE_SHORTHANDS[d]()), q.date).desc("date in format YYYY-MM[-DDTHH-MM-SS.MS] or in shorthand"),
      durationType: (_) => parsimmon_umd_minExports.alt(...Object.keys(DURATION_TYPES).sort((a, b) => b.length - a.length).map(parsimmon_umd_minExports.string)),
      duration: (q) => parsimmon_umd_minExports.seqMap(q.number, parsimmon_umd_minExports.optWhitespace, q.durationType, (count, _, t) => DURATION_TYPES[t].mapUnits((x) => x * count)).sepBy1(parsimmon_umd_minExports.string(",").trim(parsimmon_umd_minExports.optWhitespace).or(parsimmon_umd_minExports.optWhitespace)).map((durations) => durations.reduce((p, c) => p.plus(c))).desc("duration like 4hr2min"),
      rawNull: (_) => parsimmon_umd_minExports.string("null"),
      tagSource: (q) => q.tag.map((tag) => Sources.tag(tag)),
      csvSource: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("csv(").skip(parsimmon_umd_minExports.optWhitespace), q.string, parsimmon_umd_minExports.string(")"), (_1, path, _2) => Sources.csv(path)),
      linkIncomingSource: (q) => q.link.map((link) => Sources.link(link.path, true)),
      linkOutgoingSource: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("outgoing(").skip(parsimmon_umd_minExports.optWhitespace), q.link, parsimmon_umd_minExports.string(")"), (_1, link, _2) => Sources.link(link.path, false)),
      folderSource: (q) => q.string.map((str) => Sources.folder(str)),
      parensSource: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("("), parsimmon_umd_minExports.optWhitespace, q.source, parsimmon_umd_minExports.optWhitespace, parsimmon_umd_minExports.string(")"), (_1, _2, field, _3, _4) => field),
      negateSource: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.alt(parsimmon_umd_minExports.string("-"), parsimmon_umd_minExports.string("!")), q.atomSource, (_, source) => Sources.negate(source)),
      atomSource: (q) => parsimmon_umd_minExports.alt(q.parensSource, q.negateSource, q.linkOutgoingSource, q.linkIncomingSource, q.folderSource, q.tagSource, q.csvSource),
      binaryOpSource: (q) => createBinaryParser(q.atomSource, q.binaryBooleanOp.map((s3) => s3), Sources.binaryOp),
      source: (q) => q.binaryOpSource,
      variableField: (q) => q.identifier.chain((r) => {
        if (KEYWORDS.includes(r.toUpperCase())) {
          return parsimmon_umd_minExports.fail("Variable fields cannot be a keyword (" + KEYWORDS.join(" or ") + ")");
        } else {
          return parsimmon_umd_minExports.succeed(Fields.variable(r));
        }
      }).desc("variable"),
      numberField: (q) => q.number.map((val) => Fields.literal(val)).desc("number"),
      stringField: (q) => q.string.map((val) => Fields.literal(val)).desc("string"),
      boolField: (q) => q.bool.map((val) => Fields.literal(val)).desc("boolean"),
      dateField: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("date("), parsimmon_umd_minExports.optWhitespace, q.datePlus, parsimmon_umd_minExports.optWhitespace, parsimmon_umd_minExports.string(")"), (prefix, _1, date, _2, postfix) => Fields.literal(date)).desc("date"),
      durationField: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("dur("), parsimmon_umd_minExports.optWhitespace, q.duration, parsimmon_umd_minExports.optWhitespace, parsimmon_umd_minExports.string(")"), (prefix, _1, dur, _2, postfix) => Fields.literal(dur)).desc("duration"),
      nullField: (q) => q.rawNull.map((_) => Fields.NULL),
      linkField: (q) => q.link.map((f) => Fields.literal(f)),
      listField: (q) => q.field.sepBy(parsimmon_umd_minExports.string(",").trim(parsimmon_umd_minExports.optWhitespace)).wrap(parsimmon_umd_minExports.string("[").skip(parsimmon_umd_minExports.optWhitespace), parsimmon_umd_minExports.optWhitespace.then(parsimmon_umd_minExports.string("]"))).map((l3) => Fields.list(l3)).desc("list ('[1, 2, 3]')"),
      objectField: (q) => parsimmon_umd_minExports.seqMap(q.identifier.or(q.string), parsimmon_umd_minExports.string(":").trim(parsimmon_umd_minExports.optWhitespace), q.field, (name, _sep, value) => {
        return { name, value };
      }).sepBy(parsimmon_umd_minExports.string(",").trim(parsimmon_umd_minExports.optWhitespace)).wrap(parsimmon_umd_minExports.string("{").skip(parsimmon_umd_minExports.optWhitespace), parsimmon_umd_minExports.optWhitespace.then(parsimmon_umd_minExports.string("}"))).map((vals) => {
        let res = {};
        for (let entry of vals)
          res[entry.name] = entry.value;
        return Fields.object(res);
      }).desc("object ('{ a: 1, b: 2 }')"),
      atomInlineField: (q) => parsimmon_umd_minExports.alt(q.date, q.duration.map((d) => normalizeDuration(d)), q.string, q.tag, q.embedLink, q.bool, q.number, q.rawNull),
      inlineFieldList: (q) => q.atomInlineField.sepBy(parsimmon_umd_minExports.string(",").trim(parsimmon_umd_minExports.optWhitespace).lookahead(q.atomInlineField)),
      inlineField: (q) => parsimmon_umd_minExports.alt(parsimmon_umd_minExports.seqMap(q.atomInlineField, parsimmon_umd_minExports.string(",").trim(parsimmon_umd_minExports.optWhitespace), q.inlineFieldList, (f, _s, l3) => [f].concat(l3)), q.atomInlineField),
      atomField: (q) => parsimmon_umd_minExports.alt(q.embedLink.map((l3) => Fields.literal(l3)), q.negatedField, q.linkField, q.listField, q.objectField, q.lambdaField, q.parensField, q.boolField, q.numberField, q.stringField, q.dateField, q.durationField, q.nullField, q.variableField),
      indexField: (q) => parsimmon_umd_minExports.seqMap(q.atomField, parsimmon_umd_minExports.alt(q.dotPostfix, q.indexPostfix, q.functionPostfix).many(), (obj, postfixes) => {
        let result = obj;
        for (let post of postfixes) {
          switch (post.type) {
            case "dot":
              result = Fields.index(result, Fields.literal(post.field));
              break;
            case "index":
              result = Fields.index(result, post.field);
              break;
            case "function":
              result = Fields.func(result, post.fields);
              break;
          }
        }
        return result;
      }),
      negatedField: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("!"), q.indexField, (_, field) => Fields.negate(field)).desc("negated field"),
      parensField: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("("), parsimmon_umd_minExports.optWhitespace, q.field, parsimmon_umd_minExports.optWhitespace, parsimmon_umd_minExports.string(")"), (_1, _2, field, _3, _4) => field),
      lambdaField: (q) => parsimmon_umd_minExports.seqMap(q.identifier.sepBy(parsimmon_umd_minExports.string(",").trim(parsimmon_umd_minExports.optWhitespace)).wrap(parsimmon_umd_minExports.string("(").trim(parsimmon_umd_minExports.optWhitespace), parsimmon_umd_minExports.string(")").trim(parsimmon_umd_minExports.optWhitespace)), parsimmon_umd_minExports.string("=>").trim(parsimmon_umd_minExports.optWhitespace), q.field, (ident, _ignore, value) => {
        return { type: "lambda", arguments: ident, value };
      }),
      dotPostfix: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("."), q.identifier, (_, field) => {
        return { type: "dot", field };
      }),
      indexPostfix: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("["), parsimmon_umd_minExports.optWhitespace, q.field, parsimmon_umd_minExports.optWhitespace, parsimmon_umd_minExports.string("]"), (_, _2, field, _3, _4) => {
        return { type: "index", field };
      }),
      functionPostfix: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("("), parsimmon_umd_minExports.optWhitespace, q.field.sepBy(parsimmon_umd_minExports.string(",").trim(parsimmon_umd_minExports.optWhitespace)), parsimmon_umd_minExports.optWhitespace, parsimmon_umd_minExports.string(")"), (_, _1, fields, _2, _3) => {
        return { type: "function", fields };
      }),
      binaryMulDivField: (q) => createBinaryParser(q.indexField, q.binaryMulDiv, Fields.binaryOp),
      binaryPlusMinusField: (q) => createBinaryParser(q.binaryMulDivField, q.binaryPlusMinus, Fields.binaryOp),
      binaryCompareField: (q) => createBinaryParser(q.binaryPlusMinusField, q.binaryCompareOp, Fields.binaryOp),
      binaryBooleanField: (q) => createBinaryParser(q.binaryCompareField, q.binaryBooleanOp, Fields.binaryOp),
      binaryOpField: (q) => q.binaryBooleanField,
      field: (q) => q.binaryOpField
    });
    function parseField(text) {
      try {
        return Result.success(EXPRESSION.field.tryParse(text));
      } catch (error) {
        return Result.failure("" + error);
      }
    }
    var QueryFields;
    (function(QueryFields2) {
      function named(name, field) {
        return { name, field };
      }
      QueryFields2.named = named;
      function sortBy(field, dir) {
        return { field, direction: dir };
      }
      QueryFields2.sortBy = sortBy;
    })(QueryFields || (QueryFields = {}));
    function captureRaw(base) {
      return parsimmon_umd_minExports.custom((success, failure) => {
        return (input, i) => {
          let result = base._(input, i);
          if (!result.status)
            return result;
          return Object.assign({}, result, { value: [result.value, input.substring(i, result.index)] });
        };
      });
    }
    function stripNewlines(text) {
      return text.split(/[\r\n]+/).map((t) => t.trim()).join("");
    }
    function precededByWhitespaceIfNotEof(if_eof, parser) {
      return parsimmon_umd_minExports.eof.map(if_eof).or(parsimmon_umd_minExports.whitespace.then(parser));
    }
    var QUERY_LANGUAGE = parsimmon_umd_minExports.createLanguage({
      queryType: (q) => parsimmon_umd_minExports.alt(parsimmon_umd_minExports.regexp(/TABLE|LIST|TASK|CALENDAR/i)).map((str) => str.toLowerCase()).desc("query type ('TABLE', 'LIST', 'TASK', or 'CALENDAR')"),
      explicitNamedField: (q) => parsimmon_umd_minExports.seqMap(EXPRESSION.field.skip(parsimmon_umd_minExports.whitespace), parsimmon_umd_minExports.regexp(/AS/i).skip(parsimmon_umd_minExports.whitespace), EXPRESSION.identifier.or(EXPRESSION.string), (field, _as, ident) => QueryFields.named(ident, field)),
      comment: () => parsimmon_umd_minExports.Parser((input, i) => {
        let line = input.substring(i);
        if (!line.startsWith("//"))
          return parsimmon_umd_minExports.makeFailure(i, "Not a comment");
        line = line.split("\n")[0];
        let comment = line.substring(2).trim();
        return parsimmon_umd_minExports.makeSuccess(i + line.length, comment);
      }),
      namedField: (q) => parsimmon_umd_minExports.alt(q.explicitNamedField, captureRaw(EXPRESSION.field).map(([value, text]) => QueryFields.named(stripNewlines(text), value))),
      sortField: (q) => parsimmon_umd_minExports.seqMap(EXPRESSION.field.skip(parsimmon_umd_minExports.optWhitespace), parsimmon_umd_minExports.regexp(/ASCENDING|DESCENDING|ASC|DESC/i).atMost(1), (field, dir) => {
        let direction = dir.length == 0 ? "ascending" : dir[0].toLowerCase();
        if (direction == "desc")
          direction = "descending";
        if (direction == "asc")
          direction = "ascending";
        return {
          field,
          direction
        };
      }),
      headerClause: (q) => q.queryType.chain((type) => {
        switch (type) {
          case "table": {
            return precededByWhitespaceIfNotEof(() => ({ type, fields: [], showId: true }), parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.regexp(/WITHOUT\s+ID/i).skip(parsimmon_umd_minExports.optWhitespace).atMost(1), parsimmon_umd_minExports.sepBy(q.namedField, parsimmon_umd_minExports.string(",").trim(parsimmon_umd_minExports.optWhitespace)), (withoutId, fields) => {
              return { type, fields, showId: withoutId.length == 0 };
            }));
          }
          case "list":
            return precededByWhitespaceIfNotEof(() => ({ type, format: void 0, showId: true }), parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.regexp(/WITHOUT\s+ID/i).skip(parsimmon_umd_minExports.optWhitespace).atMost(1), EXPRESSION.field.atMost(1), (withoutId, format) => {
              return {
                type,
                format: format.length == 1 ? format[0] : void 0,
                showId: withoutId.length == 0
              };
            }));
          case "task":
            return parsimmon_umd_minExports.succeed({ type });
          case "calendar":
            return parsimmon_umd_minExports.whitespace.then(parsimmon_umd_minExports.seqMap(q.namedField, (field) => {
              return {
                type,
                showId: true,
                field
              };
            }));
          default:
            return parsimmon_umd_minExports.fail(`Unrecognized query type '${type}'`);
        }
      }).desc("TABLE or LIST or TASK or CALENDAR"),
      fromClause: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.regexp(/FROM/i), parsimmon_umd_minExports.whitespace, EXPRESSION.source, (_1, _2, source) => source),
      whereClause: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.regexp(/WHERE/i), parsimmon_umd_minExports.whitespace, EXPRESSION.field, (where, _, field) => {
        return { type: "where", clause: field };
      }).desc("WHERE <expression>"),
      sortByClause: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.regexp(/SORT/i), parsimmon_umd_minExports.whitespace, q.sortField.sepBy1(parsimmon_umd_minExports.string(",").trim(parsimmon_umd_minExports.optWhitespace)), (sort, _1, fields) => {
        return { type: "sort", fields };
      }).desc("SORT field [ASC/DESC]"),
      limitClause: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.regexp(/LIMIT/i), parsimmon_umd_minExports.whitespace, EXPRESSION.field, (limit, _1, field) => {
        return { type: "limit", amount: field };
      }).desc("LIMIT <value>"),
      flattenClause: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.regexp(/FLATTEN/i).skip(parsimmon_umd_minExports.whitespace), q.namedField, (_, field) => {
        return { type: "flatten", field };
      }).desc("FLATTEN <value> [AS <name>]"),
      groupByClause: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.regexp(/GROUP BY/i).skip(parsimmon_umd_minExports.whitespace), q.namedField, (_, field) => {
        return { type: "group", field };
      }).desc("GROUP BY <value> [AS <name>]"),
      clause: (q) => parsimmon_umd_minExports.alt(q.fromClause, q.whereClause, q.sortByClause, q.limitClause, q.groupByClause, q.flattenClause),
      query: (q) => parsimmon_umd_minExports.seqMap(q.headerClause.trim(optionalWhitespaceOrComment), q.fromClause.trim(optionalWhitespaceOrComment).atMost(1), q.clause.trim(optionalWhitespaceOrComment).many(), (header, from, clauses) => {
        return {
          header,
          source: from.length == 0 ? Sources.folder("") : from[0],
          operations: clauses,
          settings: DEFAULT_QUERY_SETTINGS
        };
      })
    });
    var optionalWhitespaceOrComment = parsimmon_umd_minExports.alt(parsimmon_umd_minExports.whitespace, QUERY_LANGUAGE.comment).many().map((arr) => arr.join(""));
    var getAPI3 = (app) => {
      var _a;
      if (app)
        return (_a = app.plugins.plugins.dataview) == null ? void 0 : _a.api;
      else
        return window.DataviewAPI;
    };
    var isPluginEnabled = (app) => app.plugins.enabledPlugins.has("dataview");
    exports.DATE_SHORTHANDS = DATE_SHORTHANDS;
    exports.DURATION_TYPES = DURATION_TYPES;
    exports.EXPRESSION = EXPRESSION;
    exports.KEYWORDS = KEYWORDS;
    exports.QUERY_LANGUAGE = QUERY_LANGUAGE;
    exports.getAPI = getAPI3;
    exports.isPluginEnabled = isPluginEnabled;
    exports.parseField = parseField;
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => RepeatPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian6 = require("obsidian");

// src/repeat/obsidian/RepeatView.tsx
var import_obsidian4 = require("obsidian");
var import_obsidian_dataview = __toESM(require_lib());

// src/repeat/serializers.ts
var SERIALIZED_TRUE = "true";
var SERIALIZED_FALSE = "false";
function serializeRepeatPeriodUnit(repeatPeriodUnit, repeatPeriod) {
  const suffix = repeatPeriod === 1 ? "" : "s";
  return `${repeatPeriodUnit.toLowerCase()}${suffix}`;
}
function serializeRepeat({
  repeatStrategy,
  repeatPeriod,
  repeatPeriodUnit,
  repeatTimeOfDay,
  repeatWeekdays
}) {
  if (repeatPeriodUnit === "WEEKDAYS" && repeatWeekdays && repeatWeekdays.length > 0) {
    const weekdayString = repeatWeekdays.join(", ");
    return [
      ...repeatStrategy === "PERIODIC" ? [] : ["spaced"],
      "every",
      weekdayString,
      ...repeatTimeOfDay === "AM" ? [] : ["in the evening"]
    ].join(" ");
  }
  if (repeatStrategy === "PERIODIC" && repeatPeriod === 1 && repeatPeriodUnit !== "HOUR" && repeatTimeOfDay === "AM") {
    switch (repeatPeriodUnit) {
      case "DAY":
        return "daily";
      case "WEEK":
        return "weekly";
      case "MONTH":
        return "monthly";
      case "YEAR":
        return "yearly";
      default:
        break;
    }
  }
  return [
    ...repeatStrategy === "PERIODIC" ? [] : ["spaced"],
    "every",
    ...repeatPeriod === 1 ? [] : [`${repeatPeriod}`],
    serializeRepeatPeriodUnit(repeatPeriodUnit, repeatPeriod),
    ...repeatTimeOfDay === "AM" ? [] : ["in the evening"]
  ].join(" ");
}
function serializeRepetition(repetition) {
  if (repetition === "NEVER") {
    return {
      repeat: "never",
      due_at: void 0,
      hidden: void 0
    };
  } else if (repetition === "DISMISS") {
    return {
      repeat: void 0,
      due_at: void 0,
      hidden: void 0
    };
  } else {
    return {
      repeat: serializeRepeat(repetition),
      due_at: repetition.repeatDueAt.toISO(),
      hidden: repetition.hidden ? SERIALIZED_TRUE : SERIALIZED_FALSE
    };
  }
}

// src/frontmatter.ts
function determineFrontmatterBounds(content, includeDelimiters = false) {
  const openRegex = /---\r?\n/gm;
  const closeRegex = /-{3,}(\s|$)/gm;
  const openResult = openRegex.exec(content);
  if ((openResult == null ? void 0 : openResult.index) !== 0) {
    return null;
  }
  let frontmatterStartIndex = 4;
  if (openResult[0].includes("\r")) {
    frontmatterStartIndex = 5;
  }
  closeRegex.lastIndex = frontmatterStartIndex;
  const closeResult = closeRegex.exec(content);
  if (!closeResult) {
    return null;
  }
  const startIndex = includeDelimiters ? 0 : frontmatterStartIndex;
  const closeIndex = includeDelimiters ? closeRegex.lastIndex : closeResult.index;
  return [startIndex, closeIndex];
}
function determineInlineFieldBounds(frontmatter, field) {
  const fieldRegex = new RegExp(`^${field}\\s*:\\s*.*(?=\\r?\\n)`, "gm");
  let fieldResult;
  let lastMatch;
  while (fieldResult = fieldRegex.exec(frontmatter)) {
    lastMatch = fieldResult;
  }
  if (!lastMatch) {
    return null;
  }
  return [lastMatch.index, lastMatch.index + lastMatch[0].length];
}
function replaceOrInsertField(frontmatter, field, value) {
  let bounds = determineInlineFieldBounds(frontmatter, field);
  if (!bounds) {
    bounds = [frontmatter.length, frontmatter.length];
  }
  const prefix = frontmatter.slice(0, bounds[0]);
  const suffix = frontmatter.slice(bounds[1]);
  return [
    prefix,
    `${field}: ${value}`,
    suffix || "\n"
  ].join("");
}
function removeField(frontmatter, field) {
  const fieldBounds = determineInlineFieldBounds(frontmatter, field);
  if (!(fieldBounds == null ? void 0 : fieldBounds.length)) {
    return frontmatter;
  }
  const [start, end] = fieldBounds;
  const isFollowedByNewline = end < frontmatter.length && frontmatter[end] === "\n";
  return [
    frontmatter.slice(0, start),
    frontmatter.slice(end + (isFollowedByNewline ? 1 : 0))
  ].join("");
}
function updateRepetitionMetadata(content, serializedRepetition) {
  let newContent = content;
  let bounds = determineFrontmatterBounds(newContent);
  if (!bounds) {
    const newFrontmatter = "---\n---\n";
    newContent = [
      newFrontmatter,
      content
    ].join("");
    bounds = determineFrontmatterBounds(newContent);
    if (!bounds) {
      throw Error("Failed to create frontmatter in note.");
    }
  }
  let frontmatter = content.slice(...bounds);
  for (const field in serializedRepetition) {
    if (field === "hidden") {
      const hiddenBounds = determineInlineFieldBounds(frontmatter, "hidden");
      if (!(hiddenBounds == null ? void 0 : hiddenBounds.length) && serializedRepetition["hidden"] === SERIALIZED_FALSE) {
        continue;
      }
    }
    if (serializedRepetition[field] === void 0) {
      frontmatter = removeField(frontmatter, field);
    } else {
      frontmatter = replaceOrInsertField(frontmatter, field, serializedRepetition[field]);
    }
  }
  return [
    newContent.slice(0, bounds[0]),
    frontmatter,
    newContent.slice(bounds[1])
  ].join("");
}

// node_modules/luxon/src/errors.js
var LuxonError = class extends Error {
};
var InvalidDateTimeError = class extends LuxonError {
  constructor(reason) {
    super(`Invalid DateTime: ${reason.toMessage()}`);
  }
};
var InvalidIntervalError = class extends LuxonError {
  constructor(reason) {
    super(`Invalid Interval: ${reason.toMessage()}`);
  }
};
var InvalidDurationError = class extends LuxonError {
  constructor(reason) {
    super(`Invalid Duration: ${reason.toMessage()}`);
  }
};
var ConflictingSpecificationError = class extends LuxonError {
};
var InvalidUnitError = class extends LuxonError {
  constructor(unit) {
    super(`Invalid unit ${unit}`);
  }
};
var InvalidArgumentError = class extends LuxonError {
};
var ZoneIsAbstractError = class extends LuxonError {
  constructor() {
    super("Zone is an abstract class");
  }
};

// node_modules/luxon/src/impl/formats.js
var n = "numeric";
var s = "short";
var l = "long";
var DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
var DATE_MED = {
  year: n,
  month: s,
  day: n
};
var DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s
};
var DATE_FULL = {
  year: n,
  month: l,
  day: n
};
var DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
var TIME_SIMPLE = {
  hour: n,
  minute: n
};
var TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
var TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
var TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hourCycle: "h23"
};
var TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23"
};
var TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: s
};
var TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: l
};
var DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
var DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};

// node_modules/luxon/src/impl/util.js
function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
}
function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
}
function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return void 0;
  }
  return arr.reduce((best, next) => {
    const pair = [by(next), next];
    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce((a, k) => {
    a[k] = obj[k];
    return a;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
}
function floorMod(x, n2) {
  return x - n2 * Math.floor(x / n2);
}
function padStart(input, n2 = 2) {
  const isNeg = input < 0;
  let padded;
  if (isNeg) {
    padded = "-" + ("" + -input).padStart(n2, "0");
  } else {
    padded = ("" + input).padStart(n2, "0");
  }
  return padded;
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return void 0;
  } else {
    return parseInt(string, 10);
  }
}
function parseFloating(string) {
  if (isUndefined(string) || string === null || string === "") {
    return void 0;
  } else {
    return parseFloat(string);
  }
}
function parseMillis(fraction) {
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return void 0;
  } else {
    const f = parseFloat("0." + fraction) * 1e3;
    return Math.floor(f);
  }
}
function roundTo(number, digits, towardZero = false) {
  const factor = 10 ** digits, rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
}
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  const modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
}
function objToLocalTS(obj) {
  let d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);
  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }
  return +d;
}
function weeksInWeekYear(weekYear) {
  const p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7, last = weekYear - 1, p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else
    return year > 60 ? 1900 + year : 2e3 + year;
}
function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
  const date = new Date(ts), intlOpts = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }
  const modified = { timeZoneName: offsetFormat, ...intlOpts };
  const parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find((m) => m.type.toLowerCase() === "timezonename");
  return parsed ? parsed.value : null;
}
function signedOffset(offHourStr, offMinuteStr) {
  let offHour = parseInt(offHourStr, 10);
  if (Number.isNaN(offHour)) {
    offHour = 0;
  }
  const offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
}
function asNumber(value) {
  const numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
    throw new InvalidArgumentError(`Invalid unit value ${value}`);
  return numericValue;
}
function normalizeObject(obj, normalizer) {
  const normalized = {};
  for (const u in obj) {
    if (hasOwnProperty(obj, u)) {
      const v = obj[u];
      if (v === void 0 || v === null)
        continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }
  return normalized;
}
function formatOffset(offset2, format) {
  const hours = Math.trunc(Math.abs(offset2 / 60)), minutes = Math.trunc(Math.abs(offset2 % 60)), sign = offset2 >= 0 ? "+" : "-";
  switch (format) {
    case "short":
      return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
    case "narrow":
      return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
    case "techie":
      return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
    default:
      throw new RangeError(`Value format ${format} is out of range for property format`);
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
var ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;

// node_modules/luxon/src/impl/english.js
var monthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return [...monthsNarrow];
    case "short":
      return [...monthsShort];
    case "long":
      return [...monthsLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
var weekdaysLong = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return [...weekdaysNarrow];
    case "short":
      return [...weekdaysShort];
    case "long":
      return [...weekdaysLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
var meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return [...erasNarrow];
    case "short":
      return [...erasShort];
    case "long":
      return [...erasLong];
    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
  const units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;
  if (numeric === "auto" && lastable) {
    const isDay = unit === "days";
    switch (count) {
      case 1:
        return isDay ? "tomorrow" : `next ${units[unit][0]}`;
      case -1:
        return isDay ? "yesterday" : `last ${units[unit][0]}`;
      case 0:
        return isDay ? "today" : `this ${units[unit][0]}`;
      default:
    }
  }
  const isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
}

// node_modules/luxon/src/impl/formatter.js
function stringifyTokens(splits, tokenToString) {
  let s2 = "";
  for (const token of splits) {
    if (token.literal) {
      s2 += token.val;
    } else {
      s2 += tokenToString(token.val);
    }
  }
  return s2;
}
var macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
var Formatter = class {
  static create(locale, opts = {}) {
    return new Formatter(locale, opts);
  }
  static parseFormat(fmt) {
    let current = null, currentFull = "", bracketed = false;
    const splits = [];
    for (let i = 0; i < fmt.length; i++) {
      const c = fmt.charAt(i);
      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({ literal: bracketed, val: currentFull });
        }
        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({ literal: false, val: currentFull });
        }
        currentFull = c;
        current = c;
      }
    }
    if (currentFull.length > 0) {
      splits.push({ literal: bracketed, val: currentFull });
    }
    return splits;
  }
  static macroTokenToFormatOpts(token) {
    return macroTokenToFormatOpts[token];
  }
  constructor(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }
  formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }
    const df = this.systemLoc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }
  formatDateTime(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }
  formatDateTimeParts(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.formatToParts();
  }
  resolvedOptions(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.resolvedOptions();
  }
  num(n2, p = 0) {
    if (this.opts.forceSimple) {
      return padStart(n2, p);
    }
    const opts = { ...this.opts };
    if (p > 0) {
      opts.padTo = p;
    }
    return this.loc.numberFormatter(opts).format(n2);
  }
  formatDateTimeFromString(dt, fmt) {
    const knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = (opts, extract) => this.loc.extract(dt, opts, extract), formatOffset2 = (opts) => {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }
      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    }, meridiem = () => knownEnglish ? meridiemForDateTime(dt) : string({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), month = (length, standalone) => knownEnglish ? monthForDateTime(dt, length) : string(standalone ? { month: length } : { month: length, day: "numeric" }, "month"), weekday = (length, standalone) => knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" }, "weekday"), maybeMacro = (token) => {
      const formatOpts = Formatter.macroTokenToFormatOpts(token);
      if (formatOpts) {
        return this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token;
      }
    }, era = (length) => knownEnglish ? eraForDateTime(dt, length) : string({ era: length }, "era"), tokenToString = (token) => {
      switch (token) {
        case "S":
          return this.num(dt.millisecond);
        case "u":
        case "SSS":
          return this.num(dt.millisecond, 3);
        case "s":
          return this.num(dt.second);
        case "ss":
          return this.num(dt.second, 2);
        case "uu":
          return this.num(Math.floor(dt.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(dt.millisecond / 100));
        case "m":
          return this.num(dt.minute);
        case "mm":
          return this.num(dt.minute, 2);
        case "h":
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
        case "hh":
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
        case "H":
          return this.num(dt.hour);
        case "HH":
          return this.num(dt.hour, 2);
        case "Z":
          return formatOffset2({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return formatOffset2({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return formatOffset2({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return dt.zone.offsetName(dt.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return dt.zone.offsetName(dt.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return dt.zoneName;
        case "a":
          return meridiem();
        case "d":
          return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt.day);
        case "dd":
          return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt.day, 2);
        case "c":
          return this.num(dt.weekday);
        case "ccc":
          return weekday("short", true);
        case "cccc":
          return weekday("long", true);
        case "ccccc":
          return weekday("narrow", true);
        case "E":
          return this.num(dt.weekday);
        case "EEE":
          return weekday("short", false);
        case "EEEE":
          return weekday("long", false);
        case "EEEEE":
          return weekday("narrow", false);
        case "L":
          return useDateTimeFormatter ? string({ month: "numeric", day: "numeric" }, "month") : this.num(dt.month);
        case "LL":
          return useDateTimeFormatter ? string({ month: "2-digit", day: "numeric" }, "month") : this.num(dt.month, 2);
        case "LLL":
          return month("short", true);
        case "LLLL":
          return month("long", true);
        case "LLLLL":
          return month("narrow", true);
        case "M":
          return useDateTimeFormatter ? string({ month: "numeric" }, "month") : this.num(dt.month);
        case "MM":
          return useDateTimeFormatter ? string({ month: "2-digit" }, "month") : this.num(dt.month, 2);
        case "MMM":
          return month("short", false);
        case "MMMM":
          return month("long", false);
        case "MMMMM":
          return month("narrow", false);
        case "y":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year);
        case "yy":
          return useDateTimeFormatter ? string({ year: "2-digit" }, "year") : this.num(dt.year.toString().slice(-2), 2);
        case "yyyy":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 4);
        case "yyyyyy":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 6);
        case "G":
          return era("short");
        case "GG":
          return era("long");
        case "GGGGG":
          return era("narrow");
        case "kk":
          return this.num(dt.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(dt.weekYear, 4);
        case "W":
          return this.num(dt.weekNumber);
        case "WW":
          return this.num(dt.weekNumber, 2);
        case "o":
          return this.num(dt.ordinal);
        case "ooo":
          return this.num(dt.ordinal, 3);
        case "q":
          return this.num(dt.quarter);
        case "qq":
          return this.num(dt.quarter, 2);
        case "X":
          return this.num(Math.floor(dt.ts / 1e3));
        case "x":
          return this.num(dt.ts);
        default:
          return maybeMacro(token);
      }
    };
    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  }
  formatDurationFromString(dur, fmt) {
    const tokenToField = (token) => {
      switch (token[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "w":
          return "week";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, tokenToString = (lildur) => (token) => {
      const mapped = tokenToField(token);
      if (mapped) {
        return this.num(lildur.get(mapped), token.length);
      } else {
        return token;
      }
    }, tokens = Formatter.parseFormat(fmt), realTokens = tokens.reduce((found, { literal, val }) => literal ? found : found.concat(val), []), collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t) => t));
    return stringifyTokens(tokens, tokenToString(collapsed));
  }
};

// node_modules/luxon/src/impl/invalid.js
var Invalid = class {
  constructor(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }
  toMessage() {
    if (this.explanation) {
      return `${this.reason}: ${this.explanation}`;
    } else {
      return this.reason;
    }
  }
};

// node_modules/luxon/src/zone.js
var Zone = class {
  get type() {
    throw new ZoneIsAbstractError();
  }
  get name() {
    throw new ZoneIsAbstractError();
  }
  get ianaName() {
    return this.name;
  }
  get isUniversal() {
    throw new ZoneIsAbstractError();
  }
  offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  offset(ts) {
    throw new ZoneIsAbstractError();
  }
  equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  get isValid() {
    throw new ZoneIsAbstractError();
  }
};

// node_modules/luxon/src/zones/systemZone.js
var singleton = null;
var SystemZone = class extends Zone {
  static get instance() {
    if (singleton === null) {
      singleton = new SystemZone();
    }
    return singleton;
  }
  get type() {
    return "system";
  }
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get isUniversal() {
    return false;
  }
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale);
  }
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  equals(otherZone) {
    return otherZone.type === "system";
  }
  get isValid() {
    return true;
  }
};

// node_modules/luxon/src/zones/IANAZone.js
var dtfCache = {};
function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      era: "short"
    });
  }
  return dtfCache[zone];
}
var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function hackyOffset(dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted), [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
  return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
}
function partsOffset(dtf, date) {
  const formatted = dtf.formatToParts(date);
  const filled = [];
  for (let i = 0; i < formatted.length; i++) {
    const { type, value } = formatted[i];
    const pos = typeToPos[type];
    if (type === "era") {
      filled[pos] = value;
    } else if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}
var ianaZoneCache = {};
var IANAZone = class extends Zone {
  static create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }
    return ianaZoneCache[name];
  }
  static resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }
  static isValidSpecifier(s2) {
    return this.isValidZone(s2);
  }
  static isValidZone(zone) {
    if (!zone) {
      return false;
    }
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
      return true;
    } catch (e) {
      return false;
    }
  }
  constructor(name) {
    super();
    this.zoneName = name;
    this.valid = IANAZone.isValidZone(name);
  }
  get type() {
    return "iana";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return false;
  }
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale, this.name);
  }
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  offset(ts) {
    const date = new Date(ts);
    if (isNaN(date))
      return NaN;
    const dtf = makeDTF(this.name);
    let [year, month, day, adOrBc, hour, minute, second] = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
    if (adOrBc === "BC") {
      year = -Math.abs(year) + 1;
    }
    const adjustedHour = hour === 24 ? 0 : hour;
    const asUTC = objToLocalTS({
      year,
      month,
      day,
      hour: adjustedHour,
      minute,
      second,
      millisecond: 0
    });
    let asTS = +date;
    const over = asTS % 1e3;
    asTS -= over >= 0 ? over : 1e3 + over;
    return (asUTC - asTS) / (60 * 1e3);
  }
  equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  get isValid() {
    return this.valid;
  }
};

// node_modules/luxon/src/zones/fixedOffsetZone.js
var singleton2 = null;
var FixedOffsetZone = class extends Zone {
  static get utcInstance() {
    if (singleton2 === null) {
      singleton2 = new FixedOffsetZone(0);
    }
    return singleton2;
  }
  static instance(offset2) {
    return offset2 === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset2);
  }
  static parseSpecifier(s2) {
    if (s2) {
      const r = s2.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }
    return null;
  }
  constructor(offset2) {
    super();
    this.fixed = offset2;
  }
  get type() {
    return "fixed";
  }
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${formatOffset(this.fixed, "narrow")}`;
  }
  get ianaName() {
    if (this.fixed === 0) {
      return "Etc/UTC";
    } else {
      return `Etc/GMT${formatOffset(-this.fixed, "narrow")}`;
    }
  }
  offsetName() {
    return this.name;
  }
  formatOffset(ts, format) {
    return formatOffset(this.fixed, format);
  }
  get isUniversal() {
    return true;
  }
  offset() {
    return this.fixed;
  }
  equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  get isValid() {
    return true;
  }
};

// node_modules/luxon/src/zones/invalidZone.js
var InvalidZone = class extends Zone {
  constructor(zoneName) {
    super();
    this.zoneName = zoneName;
  }
  get type() {
    return "invalid";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return false;
  }
  offsetName() {
    return null;
  }
  formatOffset() {
    return "";
  }
  offset() {
    return NaN;
  }
  equals() {
    return false;
  }
  get isValid() {
    return false;
  }
};

// node_modules/luxon/src/impl/zoneUtil.js
function normalizeZone(input, defaultZone2) {
  let offset2;
  if (isUndefined(input) || input === null) {
    return defaultZone2;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    const lowered = input.toLowerCase();
    if (lowered === "default")
      return defaultZone2;
    else if (lowered === "local" || lowered === "system")
      return SystemZone.instance;
    else if (lowered === "utc" || lowered === "gmt")
      return FixedOffsetZone.utcInstance;
    else
      return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    return input;
  } else {
    return new InvalidZone(input);
  }
}

// node_modules/luxon/src/settings.js
var now = () => Date.now();
var defaultZone = "system";
var defaultLocale = null;
var defaultNumberingSystem = null;
var defaultOutputCalendar = null;
var throwOnInvalid;
var Settings = class {
  static get now() {
    return now;
  }
  static set now(n2) {
    now = n2;
  }
  static set defaultZone(zone) {
    defaultZone = zone;
  }
  static get defaultZone() {
    return normalizeZone(defaultZone, SystemZone.instance);
  }
  static get defaultLocale() {
    return defaultLocale;
  }
  static set defaultLocale(locale) {
    defaultLocale = locale;
  }
  static get defaultNumberingSystem() {
    return defaultNumberingSystem;
  }
  static set defaultNumberingSystem(numberingSystem) {
    defaultNumberingSystem = numberingSystem;
  }
  static get defaultOutputCalendar() {
    return defaultOutputCalendar;
  }
  static set defaultOutputCalendar(outputCalendar) {
    defaultOutputCalendar = outputCalendar;
  }
  static get throwOnInvalid() {
    return throwOnInvalid;
  }
  static set throwOnInvalid(t) {
    throwOnInvalid = t;
  }
  static resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  }
};

// node_modules/luxon/src/impl/locale.js
var intlLFCache = {};
function getCachedLF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlLFCache[key];
  if (!dtf) {
    dtf = new Intl.ListFormat(locString, opts);
    intlLFCache[key] = dtf;
  }
  return dtf;
}
var intlDTCache = {};
function getCachedDTF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlDTCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }
  return dtf;
}
var intlNumCache = {};
function getCachedINF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let inf = intlNumCache[key];
  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }
  return inf;
}
var intlRelCache = {};
function getCachedRTF(locString, opts = {}) {
  const { base, ...cacheKeyOpts } = opts;
  const key = JSON.stringify([locString, cacheKeyOpts]);
  let inf = intlRelCache[key];
  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }
  return inf;
}
var sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  }
}
function parseLocaleString(localeStr) {
  const uIndex = localeStr.indexOf("-u-");
  if (uIndex === -1) {
    return [localeStr];
  } else {
    let options;
    const smaller = localeStr.substring(0, uIndex);
    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }
    const { numberingSystem, calendar } = options;
    return [smaller, numberingSystem, calendar];
  }
}
function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    localeStr += "-u";
    if (outputCalendar) {
      localeStr += `-ca-${outputCalendar}`;
    }
    if (numberingSystem) {
      localeStr += `-nu-${numberingSystem}`;
    }
    return localeStr;
  } else {
    return localeStr;
  }
}
function mapMonths(f) {
  const ms = [];
  for (let i = 1; i <= 12; i++) {
    const dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }
  return ms;
}
function mapWeekdays(f) {
  const ms = [];
  for (let i = 1; i <= 7; i++) {
    const dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }
  return ms;
}
function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  const mode = loc.listingMode(defaultOK);
  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}
function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
var PolyNumberFormatter = class {
  constructor(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;
    const { padTo, floor, ...otherOpts } = opts;
    if (!forceSimple || Object.keys(otherOpts).length > 0) {
      const intlOpts = { useGrouping: false, ...opts };
      if (opts.padTo > 0)
        intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }
  format(i) {
    if (this.inf) {
      const fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      const fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
      return padStart(fixed, this.padTo);
    }
  }
};
var PolyDateFormatter = class {
  constructor(dt, intl, opts) {
    this.opts = opts;
    let z;
    if (dt.zone.isUniversal) {
      const gmtOffset = -1 * (dt.offset / 60);
      const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
      if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
        z = offsetZ;
        this.dt = dt;
      } else {
        z = "UTC";
        if (opts.timeZoneName) {
          this.dt = dt;
        } else {
          this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1e3);
        }
      }
    } else if (dt.zone.type === "system") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }
    const intlOpts = { ...this.opts };
    if (z) {
      intlOpts.timeZone = z;
    }
    this.dtf = getCachedDTF(intl, intlOpts);
  }
  format() {
    return this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
};
var PolyRelFormatter = class {
  constructor(intl, isEnglish, opts) {
    this.opts = { style: "long", ...opts };
    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }
  format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  }
  formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  }
};
var Locale = class {
  static fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  }
  static create(locale, numberingSystem, outputCalendar, defaultToEN = false) {
    const specifiedLocale = locale || Settings.defaultLocale;
    const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
    const numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
    const outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  }
  static resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  }
  static fromObject({ locale, numberingSystem, outputCalendar } = {}) {
    return Locale.create(locale, numberingSystem, outputCalendar);
  }
  constructor(locale, numbering, outputCalendar, specifiedLocale) {
    const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);
    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = { format: {}, standalone: {} };
    this.monthsCache = { format: {}, standalone: {} };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }
  get fastNumbers() {
    if (this.fastNumbersCached == null) {
      this.fastNumbersCached = supportsFastNumbers(this);
    }
    return this.fastNumbersCached;
  }
  listingMode() {
    const isActuallyEn = this.isEnglish();
    const hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return isActuallyEn && hasNoWeirdness ? "en" : "intl";
  }
  clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  }
  redefaultToEN(alts = {}) {
    return this.clone({ ...alts, defaultToEN: true });
  }
  redefaultToSystem(alts = {}) {
    return this.clone({ ...alts, defaultToEN: false });
  }
  months(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, months, () => {
      const intl = format ? { month: length, day: "numeric" } : { month: length }, formatStr = format ? "format" : "standalone";
      if (!this.monthsCache[formatStr][length]) {
        this.monthsCache[formatStr][length] = mapMonths((dt) => this.extract(dt, intl, "month"));
      }
      return this.monthsCache[formatStr][length];
    });
  }
  weekdays(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, weekdays, () => {
      const intl = format ? { weekday: length, year: "numeric", month: "long", day: "numeric" } : { weekday: length }, formatStr = format ? "format" : "standalone";
      if (!this.weekdaysCache[formatStr][length]) {
        this.weekdaysCache[formatStr][length] = mapWeekdays((dt) => this.extract(dt, intl, "weekday"));
      }
      return this.weekdaysCache[formatStr][length];
    });
  }
  meridiems(defaultOK = true) {
    return listStuff(this, void 0, defaultOK, () => meridiems, () => {
      if (!this.meridiemCache) {
        const intl = { hour: "numeric", hourCycle: "h12" };
        this.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map((dt) => this.extract(dt, intl, "dayperiod"));
      }
      return this.meridiemCache;
    });
  }
  eras(length, defaultOK = true) {
    return listStuff(this, length, defaultOK, eras, () => {
      const intl = { era: length };
      if (!this.eraCache[length]) {
        this.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map((dt) => this.extract(dt, intl, "era"));
      }
      return this.eraCache[length];
    });
  }
  extract(dt, intlOpts, field) {
    const df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find((m) => m.type.toLowerCase() === field);
    return matching ? matching.value : null;
  }
  numberFormatter(opts = {}) {
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  }
  dtFormatter(dt, intlOpts = {}) {
    return new PolyDateFormatter(dt, this.intl, intlOpts);
  }
  relFormatter(opts = {}) {
    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  }
  listFormatter(opts = {}) {
    return getCachedLF(this.intl, opts);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  }
};

// node_modules/luxon/src/impl/regexParser.js
function combineRegexes(...regexes) {
  const full = regexes.reduce((f, r) => f + r.source, "");
  return RegExp(`^${full}$`);
}
function combineExtractors(...extractors) {
  return (m) => extractors.reduce(([mergedVals, mergedZone, cursor], ex) => {
    const [val, zone, next] = ex(m, cursor);
    return [{ ...mergedVals, ...val }, zone || mergedZone, next];
  }, [{}, null, 1]).slice(0, 2);
}
function parse(s2, ...patterns) {
  if (s2 == null) {
    return [null, null];
  }
  for (const [regex, extractor] of patterns) {
    const m = regex.exec(s2);
    if (m) {
      return extractor(m);
    }
  }
  return [null, null];
}
function simpleParse(...keys) {
  return (match2, cursor) => {
    const ret = {};
    let i;
    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match2[cursor + i]);
    }
    return [ret, null, cursor + i];
  };
}
var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
var isoExtendedZone = `(?:${offsetRegex.source}?(?:\\[(${ianaRegex.source})\\])?)?`;
var isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
var isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${isoExtendedZone}`);
var isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`);
var isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
var isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
var isoOrdinalRegex = /(\d{4})-?(\d{3})/;
var extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
var extractISOOrdinalData = simpleParse("year", "ordinal");
var sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/;
var sqlTimeRegex = RegExp(`${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`);
var sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);
function int(match2, pos, fallback) {
  const m = match2[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}
function extractISOYmd(match2, cursor) {
  const item = {
    year: int(match2, cursor),
    month: int(match2, cursor + 1, 1),
    day: int(match2, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}
function extractISOTime(match2, cursor) {
  const item = {
    hours: int(match2, cursor, 0),
    minutes: int(match2, cursor + 1, 0),
    seconds: int(match2, cursor + 2, 0),
    milliseconds: parseMillis(match2[cursor + 3])
  };
  return [item, null, cursor + 4];
}
function extractISOOffset(match2, cursor) {
  const local = !match2[cursor] && !match2[cursor + 1], fullOffset = signedOffset(match2[cursor + 1], match2[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}
function extractIANAZone(match2, cursor) {
  const zone = match2[cursor] ? IANAZone.create(match2[cursor]) : null;
  return [{}, zone, cursor + 1];
}
var isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);
var isoDuration = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function extractISODuration(match2) {
  const [s2, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] = match2;
  const hasNegativePrefix = s2[0] === "-";
  const negativeSeconds = secondStr && secondStr[0] === "-";
  const maybeNegate = (num, force = false) => num !== void 0 && (force || num && hasNegativePrefix) ? -num : num;
  return [
    {
      years: maybeNegate(parseFloating(yearStr)),
      months: maybeNegate(parseFloating(monthStr)),
      weeks: maybeNegate(parseFloating(weekStr)),
      days: maybeNegate(parseFloating(dayStr)),
      hours: maybeNegate(parseFloating(hourStr)),
      minutes: maybeNegate(parseFloating(minuteStr)),
      seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
      milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
    }
  ];
}
var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  const result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr)
    result.second = parseInteger(secondStr);
  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }
  return result;
}
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function extractRFC2822(match2) {
  const [
    ,
    weekdayStr,
    dayStr,
    monthStr,
    yearStr,
    hourStr,
    minuteStr,
    secondStr,
    obsOffset,
    milOffset,
    offHourStr,
    offMinuteStr
  ] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  let offset2;
  if (obsOffset) {
    offset2 = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset2 = 0;
  } else {
    offset2 = signedOffset(offHourStr, offMinuteStr);
  }
  return [result, new FixedOffsetZone(offset2)];
}
function preprocessRFC2822(s2) {
  return s2.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
var rfc850 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
var ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function extractRFC1123Or850(match2) {
  const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}
function extractASCII(match2) {
  const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}
var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseISODate(s2) {
  return parse(s2, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
}
function parseRFC2822Date(s2) {
  return parse(preprocessRFC2822(s2), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s2) {
  return parse(s2, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}
function parseISODuration(s2) {
  return parse(s2, [isoDuration, extractISODuration]);
}
var extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s2) {
  return parse(s2, [isoTimeOnly, extractISOTimeOnly]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s2) {
  return parse(s2, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
}

// node_modules/luxon/src/duration.js
var INVALID = "Invalid Duration";
var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
};
var casualMatrix = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...lowOrderMatrix
};
var daysInYearAccurate = 146097 / 400;
var daysInMonthAccurate = 146097 / 4800;
var accurateMatrix = {
  years: {
    quarters: 4,
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1e3
  },
  ...lowOrderMatrix
};
var orderedUnits = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
];
var reverseUnits = orderedUnits.slice(0).reverse();
function clone(dur, alts, clear = false) {
  const conf = {
    values: clear ? alts.values : { ...dur.values, ...alts.values || {} },
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
    matrix: alts.matrix || dur.matrix
  };
  return new Duration(conf);
}
function antiTrunc(n2) {
  return n2 < 0 ? Math.floor(n2) : Math.ceil(n2);
}
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  const conv = matrix[toUnit][fromUnit], raw = fromMap[fromUnit] / conv, sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]), added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
}
function normalizeValues(matrix, vals) {
  reverseUnits.reduce((previous, current) => {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }
      return current;
    } else {
      return previous;
    }
  }, null);
}
function removeZeroes(vals) {
  const newVals = {};
  for (const [key, value] of Object.entries(vals)) {
    if (value !== 0) {
      newVals[key] = value;
    }
  }
  return newVals;
}
var Duration = class {
  constructor(config) {
    const accurate = config.conversionAccuracy === "longterm" || false;
    let matrix = accurate ? accurateMatrix : casualMatrix;
    if (config.matrix) {
      matrix = config.matrix;
    }
    this.values = config.values;
    this.loc = config.loc || Locale.create();
    this.conversionAccuracy = accurate ? "longterm" : "casual";
    this.invalid = config.invalid || null;
    this.matrix = matrix;
    this.isLuxonDuration = true;
  }
  static fromMillis(count, opts) {
    return Duration.fromObject({ milliseconds: count }, opts);
  }
  static fromObject(obj, opts = {}) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError(`Duration.fromObject: argument expected to be an object, got ${obj === null ? "null" : typeof obj}`);
    }
    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit),
      loc: Locale.fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy,
      matrix: opts.matrix
    });
  }
  static fromDurationLike(durationLike) {
    if (isNumber(durationLike)) {
      return Duration.fromMillis(durationLike);
    } else if (Duration.isDuration(durationLike)) {
      return durationLike;
    } else if (typeof durationLike === "object") {
      return Duration.fromObject(durationLike);
    } else {
      throw new InvalidArgumentError(`Unknown duration argument ${durationLike} of type ${typeof durationLike}`);
    }
  }
  static fromISO(text, opts) {
    const [parsed] = parseISODuration(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }
  static fromISOTime(text, opts) {
    const [parsed] = parseISOTimeOnly(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({ invalid });
    }
  }
  static normalizeUnit(unit) {
    const normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized)
      throw new InvalidUnitError(unit);
    return normalized;
  }
  static isDuration(o) {
    return o && o.isLuxonDuration || false;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  toFormat(fmt, opts = {}) {
    const fmtOpts = {
      ...opts,
      floor: opts.round !== false && opts.floor !== false
    };
    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
  }
  toHuman(opts = {}) {
    const l2 = orderedUnits.map((unit) => {
      const val = this.values[unit];
      if (isUndefined(val)) {
        return null;
      }
      return this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...opts, unit: unit.slice(0, -1) }).format(val);
    }).filter((n2) => n2);
    return this.loc.listFormatter({ type: "conjunction", style: opts.listStyle || "narrow", ...opts }).format(l2);
  }
  toObject() {
    if (!this.isValid)
      return {};
    return { ...this.values };
  }
  toISO() {
    if (!this.isValid)
      return null;
    let s2 = "P";
    if (this.years !== 0)
      s2 += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0)
      s2 += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0)
      s2 += this.weeks + "W";
    if (this.days !== 0)
      s2 += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
      s2 += "T";
    if (this.hours !== 0)
      s2 += this.hours + "H";
    if (this.minutes !== 0)
      s2 += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0)
      s2 += roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S";
    if (s2 === "P")
      s2 += "T0S";
    return s2;
  }
  toISOTime(opts = {}) {
    if (!this.isValid)
      return null;
    const millis = this.toMillis();
    if (millis < 0 || millis >= 864e5)
      return null;
    opts = {
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended",
      ...opts
    };
    const value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    let fmt = opts.format === "basic" ? "hhmm" : "hh:mm";
    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === "basic" ? "ss" : ":ss";
      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += ".SSS";
      }
    }
    let str = value.toFormat(fmt);
    if (opts.includePrefix) {
      str = "T" + str;
    }
    return str;
  }
  toJSON() {
    return this.toISO();
  }
  toString() {
    return this.toISO();
  }
  toMillis() {
    return this.as("milliseconds");
  }
  valueOf() {
    return this.toMillis();
  }
  plus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration), result = {};
    for (const k of orderedUnits) {
      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }
    return clone(this, { values: result }, true);
  }
  minus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration);
    return this.plus(dur.negate());
  }
  mapUnits(fn) {
    if (!this.isValid)
      return this;
    const result = {};
    for (const k of Object.keys(this.values)) {
      result[k] = asNumber(fn(this.values[k], k));
    }
    return clone(this, { values: result }, true);
  }
  get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }
  set(values) {
    if (!this.isValid)
      return this;
    const mixed = { ...this.values, ...normalizeObject(values, Duration.normalizeUnit) };
    return clone(this, { values: mixed });
  }
  reconfigure({ locale, numberingSystem, conversionAccuracy, matrix } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem });
    const opts = { loc, matrix, conversionAccuracy };
    return clone(this, opts);
  }
  as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  normalize() {
    if (!this.isValid)
      return this;
    const vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone(this, { values: vals }, true);
  }
  rescale() {
    if (!this.isValid)
      return this;
    const vals = removeZeroes(this.normalize().shiftToAll().toObject());
    return clone(this, { values: vals }, true);
  }
  shiftTo(...units) {
    if (!this.isValid)
      return this;
    if (units.length === 0) {
      return this;
    }
    units = units.map((u) => Duration.normalizeUnit(u));
    const built = {}, accumulated = {}, vals = this.toObject();
    let lastUnit;
    for (const k of orderedUnits) {
      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        let own = 0;
        for (const ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        }
        if (isNumber(vals[k])) {
          own += vals[k];
        }
        const i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = (own * 1e3 - i * 1e3) / 1e3;
        for (const down in vals) {
          if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        }
      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    }
    for (const key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }
    return clone(this, { values: built }, true).normalize();
  }
  shiftToAll() {
    if (!this.isValid)
      return this;
    return this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds");
  }
  negate() {
    if (!this.isValid)
      return this;
    const negated = {};
    for (const k of Object.keys(this.values)) {
      negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
    }
    return clone(this, { values: negated }, true);
  }
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }
    if (!this.loc.equals(other.loc)) {
      return false;
    }
    function eq(v1, v2) {
      if (v1 === void 0 || v1 === 0)
        return v2 === void 0 || v2 === 0;
      return v1 === v2;
    }
    for (const u of orderedUnits) {
      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }
    return true;
  }
};

// node_modules/luxon/src/interval.js
var INVALID2 = "Invalid Interval";
function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid("end before start", `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`);
  } else {
    return null;
  }
}
var Interval = class {
  constructor(config) {
    this.s = config.start;
    this.e = config.end;
    this.invalid = config.invalid || null;
    this.isLuxonInterval = true;
  }
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({ invalid });
    }
  }
  static fromDateTimes(start, end) {
    const builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
    const validateError = validateStartEnd(builtStart, builtEnd);
    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  static after(start, duration) {
    const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }
  static before(end, duration) {
    const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }
  static fromISO(text, opts) {
    const [s2, e] = (text || "").split("/", 2);
    if (s2 && e) {
      let start, startIsValid;
      try {
        start = DateTime.fromISO(s2, opts);
        startIsValid = start.isValid;
      } catch (e2) {
        startIsValid = false;
      }
      let end, endIsValid;
      try {
        end = DateTime.fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e2) {
        endIsValid = false;
      }
      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }
      if (startIsValid) {
        const dur = Duration.fromISO(e, opts);
        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        const dur = Duration.fromISO(s2, opts);
        if (dur.isValid) {
          return Interval.before(end, dur);
        }
      }
    }
    return Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
  }
  static isInterval(o) {
    return o && o.isLuxonInterval || false;
  }
  get start() {
    return this.isValid ? this.s : null;
  }
  get end() {
    return this.isValid ? this.e : null;
  }
  get isValid() {
    return this.invalidReason === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  length(unit = "milliseconds") {
    return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
  }
  count(unit = "milliseconds") {
    if (!this.isValid)
      return NaN;
    const start = this.start.startOf(unit), end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }
  hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  isAfter(dateTime) {
    if (!this.isValid)
      return false;
    return this.s > dateTime;
  }
  isBefore(dateTime) {
    if (!this.isValid)
      return false;
    return this.e <= dateTime;
  }
  contains(dateTime) {
    if (!this.isValid)
      return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  set({ start, end } = {}) {
    if (!this.isValid)
      return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }
  splitAt(...dateTimes) {
    if (!this.isValid)
      return [];
    const sorted = dateTimes.map(friendlyDateTime).filter((d) => this.contains(d)).sort(), results = [];
    let { s: s2 } = this, i = 0;
    while (s2 < this.e) {
      const added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s2, next));
      s2 = next;
      i += 1;
    }
    return results;
  }
  splitBy(duration) {
    const dur = Duration.fromDurationLike(duration);
    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }
    let { s: s2 } = this, idx = 1, next;
    const results = [];
    while (s2 < this.e) {
      const added = this.start.plus(dur.mapUnits((x) => x * idx));
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s2, next));
      s2 = next;
      idx += 1;
    }
    return results;
  }
  divideEqually(numberOfParts) {
    if (!this.isValid)
      return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  abutsStart(other) {
    if (!this.isValid)
      return false;
    return +this.e === +other.s;
  }
  abutsEnd(other) {
    if (!this.isValid)
      return false;
    return +other.e === +this.s;
  }
  engulfs(other) {
    if (!this.isValid)
      return false;
    return this.s <= other.s && this.e >= other.e;
  }
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }
    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  intersection(other) {
    if (!this.isValid)
      return this;
    const s2 = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
    if (s2 >= e) {
      return null;
    } else {
      return Interval.fromDateTimes(s2, e);
    }
  }
  union(other) {
    if (!this.isValid)
      return this;
    const s2 = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s2, e);
  }
  static merge(intervals) {
    const [found, final] = intervals.sort((a, b) => a.s - b.s).reduce(([sofar, current], item) => {
      if (!current) {
        return [sofar, item];
      } else if (current.overlaps(item) || current.abutsStart(item)) {
        return [sofar, current.union(item)];
      } else {
        return [sofar.concat([current]), item];
      }
    }, [[], null]);
    if (final) {
      found.push(final);
    }
    return found;
  }
  static xor(intervals) {
    let start = null, currentCount = 0;
    const results = [], ends = intervals.map((i) => [
      { time: i.s, type: "s" },
      { time: i.e, type: "e" }
    ]), flattened = Array.prototype.concat(...ends), arr = flattened.sort((a, b) => a.time - b.time);
    for (const i of arr) {
      currentCount += i.type === "s" ? 1 : -1;
      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }
        start = null;
      }
    }
    return Interval.merge(results);
  }
  difference(...intervals) {
    return Interval.xor([this].concat(intervals)).map((i) => this.intersection(i)).filter((i) => i && !i.isEmpty());
  }
  toString() {
    if (!this.isValid)
      return INVALID2;
    return `[${this.s.toISO()} \u2013 ${this.e.toISO()})`;
  }
  toISO(opts) {
    if (!this.isValid)
      return INVALID2;
    return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
  }
  toISODate() {
    if (!this.isValid)
      return INVALID2;
    return `${this.s.toISODate()}/${this.e.toISODate()}`;
  }
  toISOTime(opts) {
    if (!this.isValid)
      return INVALID2;
    return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
  }
  toFormat(dateFormat, { separator = " \u2013 " } = {}) {
    if (!this.isValid)
      return INVALID2;
    return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
  }
  toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }
    return this.e.diff(this.s, unit, opts);
  }
  mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  }
};

// node_modules/luxon/src/info.js
var Info = class {
  static hasDST(zone = Settings.defaultZone) {
    const proto = DateTime.now().setZone(zone).set({ month: 12 });
    return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
  }
  static isValidIANAZone(zone) {
    return IANAZone.isValidZone(zone);
  }
  static normalizeZone(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  static months(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
  }
  static monthsFormat(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
  }
  static weekdays(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
  }
  static weekdaysFormat(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
  }
  static meridiems({ locale = null } = {}) {
    return Locale.create(locale).meridiems();
  }
  static eras(length = "short", { locale = null } = {}) {
    return Locale.create(locale, null, "gregory").eras(length);
  }
  static features() {
    return { relative: hasRelative() };
  }
};

// node_modules/luxon/src/impl/diff.js
function dayDiff(earlier, later) {
  const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(), ms = utcDayStart(later) - utcDayStart(earlier);
  return Math.floor(Duration.fromMillis(ms).as("days"));
}
function highOrderDiffs(cursor, later, units) {
  const differs = [
    ["years", (a, b) => b.year - a.year],
    ["quarters", (a, b) => b.quarter - a.quarter + (b.year - a.year) * 4],
    ["months", (a, b) => b.month - a.month + (b.year - a.year) * 12],
    [
      "weeks",
      (a, b) => {
        const days = dayDiff(a, b);
        return (days - days % 7) / 7;
      }
    ],
    ["days", dayDiff]
  ];
  const results = {};
  let lowestOrder, highWater;
  for (const [unit, differ] of differs) {
    if (units.indexOf(unit) >= 0) {
      lowestOrder = unit;
      let delta = differ(cursor, later);
      highWater = cursor.plus({ [unit]: delta });
      if (highWater > later) {
        cursor = cursor.plus({ [unit]: delta - 1 });
        delta -= 1;
      } else {
        cursor = highWater;
      }
      results[unit] = delta;
    }
  }
  return [cursor, results, highWater, lowestOrder];
}
function diff_default(earlier, later, units, opts) {
  let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);
  const remainingMillis = later - cursor;
  const lowerOrderUnits = units.filter((u) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0);
  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      highWater = cursor.plus({ [lowestOrder]: 1 });
    }
    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }
  const duration = Duration.fromObject(results, opts);
  if (lowerOrderUnits.length > 0) {
    return Duration.fromMillis(remainingMillis, opts).shiftTo(...lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}

// node_modules/luxon/src/impl/digits.js
var numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
var numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
};
var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  let value = parseInt(str, 10);
  if (isNaN(value)) {
    value = "";
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (const key in numberingSystemsUTF16) {
          const [min, max] = numberingSystemsUTF16[key];
          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }
    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex({ numberingSystem }, append = "") {
  return new RegExp(`${numberingSystems[numberingSystem || "latn"]}${append}`);
}

// node_modules/luxon/src/impl/tokenParser.js
var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
function intUnit(regex, post = (i) => i) {
  return { regex, deser: ([s2]) => post(parseDigits(s2)) };
}
var NBSP = String.fromCharCode(160);
var spaceOrNBSP = `[ ${NBSP}]`;
var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
function fixListRegex(s2) {
  return s2.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}
function stripInsensitivities(s2) {
  return s2.replace(/\./g, "").replace(spaceOrNBSPRegExp, " ").toLowerCase();
}
function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: ([s2]) => strings.findIndex((i) => stripInsensitivities(s2) === stripInsensitivities(i)) + startIndex
    };
  }
}
function offset(regex, groups) {
  return { regex, deser: ([, h, m]) => signedOffset(h, m), groups };
}
function simple(regex) {
  return { regex, deser: ([s2]) => s2 };
}
function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function unitForToken(token, loc) {
  const one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = (t) => ({ regex: RegExp(escapeToken(t.val)), deser: ([s2]) => s2, literal: true }), unitate = (t) => {
    if (token.literal) {
      return literal(t);
    }
    switch (t.val) {
      case "G":
        return oneOf(loc.eras("short", false), 0);
      case "GG":
        return oneOf(loc.eras("long", false), 0);
      case "y":
        return intUnit(oneToSix);
      case "yy":
        return intUnit(twoToFour, untruncateYear);
      case "yyyy":
        return intUnit(four);
      case "yyyyy":
        return intUnit(fourToSix);
      case "yyyyyy":
        return intUnit(six);
      case "M":
        return intUnit(oneOrTwo);
      case "MM":
        return intUnit(two);
      case "MMM":
        return oneOf(loc.months("short", true, false), 1);
      case "MMMM":
        return oneOf(loc.months("long", true, false), 1);
      case "L":
        return intUnit(oneOrTwo);
      case "LL":
        return intUnit(two);
      case "LLL":
        return oneOf(loc.months("short", false, false), 1);
      case "LLLL":
        return oneOf(loc.months("long", false, false), 1);
      case "d":
        return intUnit(oneOrTwo);
      case "dd":
        return intUnit(two);
      case "o":
        return intUnit(oneToThree);
      case "ooo":
        return intUnit(three);
      case "HH":
        return intUnit(two);
      case "H":
        return intUnit(oneOrTwo);
      case "hh":
        return intUnit(two);
      case "h":
        return intUnit(oneOrTwo);
      case "mm":
        return intUnit(two);
      case "m":
        return intUnit(oneOrTwo);
      case "q":
        return intUnit(oneOrTwo);
      case "qq":
        return intUnit(two);
      case "s":
        return intUnit(oneOrTwo);
      case "ss":
        return intUnit(two);
      case "S":
        return intUnit(oneToThree);
      case "SSS":
        return intUnit(three);
      case "u":
        return simple(oneToNine);
      case "uu":
        return simple(oneOrTwo);
      case "uuu":
        return intUnit(one);
      case "a":
        return oneOf(loc.meridiems(), 0);
      case "kkkk":
        return intUnit(four);
      case "kk":
        return intUnit(twoToFour, untruncateYear);
      case "W":
        return intUnit(oneOrTwo);
      case "WW":
        return intUnit(two);
      case "E":
      case "c":
        return intUnit(one);
      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);
      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);
      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);
      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      case "Z":
      case "ZZ":
        return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
      case "ZZZ":
        return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);
      default:
        return literal(t);
    }
  };
  const unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}
var partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function tokenForPart(part, locale, formatOpts) {
  const { type, value } = part;
  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }
  const style = formatOpts[type];
  let val = partTypeStyleToTokenVal[type];
  if (typeof val === "object") {
    val = val[style];
  }
  if (val) {
    return {
      literal: false,
      val
    };
  }
  return void 0;
}
function buildRegex(units) {
  const re = units.map((u) => u.regex).reduce((f, r) => `${f}(${r.source})`, "");
  return [`^${re}$`, units];
}
function match(input, regex, handlers) {
  const matches = input.match(regex);
  if (matches) {
    const all = {};
    let matchIndex = 1;
    for (const i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        const h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  } else {
    return [matches, {}];
  }
}
function dateTimeFromMatches(matches) {
  const toField = (token) => {
    switch (token) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let zone = null;
  let specificOffset;
  if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  }
  if (!isUndefined(matches.Z)) {
    if (!zone) {
      zone = new FixedOffsetZone(matches.Z);
    }
    specificOffset = matches.Z;
  }
  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }
  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }
  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }
  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }
  const vals = Object.keys(matches).reduce((r, k) => {
    const f = toField(k);
    if (f) {
      r[f] = matches[k];
    }
    return r;
  }, {});
  return [vals, zone, specificOffset];
}
var dummyDateTimeCache = null;
function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }
  return dummyDateTimeCache;
}
function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }
  const formatOpts = Formatter.macroTokenToFormatOpts(token.val);
  const tokens = formatOptsToTokens(formatOpts, locale);
  if (tokens == null || tokens.includes(void 0)) {
    return token;
  }
  return tokens;
}
function expandMacroTokens(tokens, locale) {
  return Array.prototype.concat(...tokens.map((t) => maybeExpandMacroToken(t, locale)));
}
function explainFromTokens(locale, input, format) {
  const tokens = expandMacroTokens(Formatter.parseFormat(format), locale), units = tokens.map((t) => unitForToken(t, locale)), disqualifyingUnit = units.find((t) => t.invalidReason);
  if (disqualifyingUnit) {
    return { input, tokens, invalidReason: disqualifyingUnit.invalidReason };
  } else {
    const [regexString, handlers] = buildRegex(units), regex = RegExp(regexString, "i"), [rawMatches, matches] = match(input, regex, handlers), [result, zone, specificOffset] = matches ? dateTimeFromMatches(matches) : [null, null, void 0];
    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
    }
    return { input, tokens, regex, rawMatches, matches, result, zone, specificOffset };
  }
}
function parseFromTokens(locale, input, format) {
  const { result, zone, specificOffset, invalidReason } = explainFromTokens(locale, input, format);
  return [result, zone, specificOffset, invalidReason];
}
function formatOptsToTokens(formatOpts, locale) {
  if (!formatOpts) {
    return null;
  }
  const formatter = Formatter.create(locale, formatOpts);
  const parts = formatter.formatDateTimeParts(getDummyDateTime());
  return parts.map((p) => tokenForPart(p, locale, formatOpts));
}

// node_modules/luxon/src/impl/conversions.js
var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
var leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`);
}
function dayOfWeek(year, month, day) {
  const d = new Date(Date.UTC(year, month - 1, day));
  if (year < 100 && year >= 0) {
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }
  const js = d.getUTCDay();
  return js === 0 ? 7 : js;
}
function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}
function uncomputeOrdinal(year, ordinal) {
  const table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex((i) => i < ordinal), day = ordinal - table[month0];
  return { month: month0 + 1, day };
}
function gregorianToWeek(gregObj) {
  const { year, month, day } = gregObj, ordinal = computeOrdinal(year, month, day), weekday = dayOfWeek(year, month, day);
  let weekNumber = Math.floor((ordinal - weekday + 10) / 7), weekYear;
  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }
  return { weekYear, weekNumber, weekday, ...timeObject(gregObj) };
}
function weekToGregorian(weekData) {
  const { weekYear, weekNumber, weekday } = weekData, weekdayOfJan4 = dayOfWeek(weekYear, 1, 4), yearInDays = daysInYear(weekYear);
  let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3, year;
  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...timeObject(weekData) };
}
function gregorianToOrdinal(gregData) {
  const { year, month, day } = gregData;
  const ordinal = computeOrdinal(year, month, day);
  return { year, ordinal, ...timeObject(gregData) };
}
function ordinalToGregorian(ordinalData) {
  const { year, ordinal } = ordinalData;
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...timeObject(ordinalData) };
}
function hasInvalidWeekData(obj) {
  const validYear = isInteger(obj.weekYear), validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)), validWeekday = integerBetween(obj.weekday, 1, 7);
  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else
    return false;
}
function hasInvalidOrdinalData(obj) {
  const validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else
    return false;
}
function hasInvalidGregorianData(obj) {
  const validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else
    return false;
}
function hasInvalidTimeData(obj) {
  const { hour, minute, second, millisecond } = obj;
  const validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else
    return false;
}

// node_modules/luxon/src/datetime.js
var INVALID3 = "Invalid DateTime";
var MAX_DATE = 864e13;
function unsupportedZone(zone) {
  return new Invalid("unsupported zone", `the zone "${zone.name}" is not supported`);
}
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }
  return dt.weekData;
}
function clone2(inst, alts) {
  const current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime({ ...current, ...alts, old: current });
}
function fixOffset(localTS, o, tz) {
  let utcGuess = localTS - o * 60 * 1e3;
  const o2 = tz.offset(utcGuess);
  if (o === o2) {
    return [utcGuess, o];
  }
  utcGuess -= (o2 - o) * 60 * 1e3;
  const o3 = tz.offset(utcGuess);
  if (o2 === o3) {
    return [utcGuess, o2];
  }
  return [localTS - Math.min(o2, o3) * 60 * 1e3, Math.max(o2, o3)];
}
function tsToObj(ts, offset2) {
  ts += offset2 * 60 * 1e3;
  const d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
}
function objToTS(obj, offset2, zone) {
  return fixOffset(objToLocalTS(obj), offset2, zone);
}
function adjustTime(inst, dur) {
  const oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = {
    ...inst.c,
    year,
    month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
  }, millisToAdd = Duration.fromObject({
    years: dur.years - Math.trunc(dur.years),
    quarters: dur.quarters - Math.trunc(dur.quarters),
    months: dur.months - Math.trunc(dur.months),
    weeks: dur.weeks - Math.trunc(dur.weeks),
    days: dur.days - Math.trunc(dur.days),
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"), localTS = objToLocalTS(c);
  let [ts, o] = fixOffset(localTS, oPre, inst.zone);
  if (millisToAdd !== 0) {
    ts += millisToAdd;
    o = inst.zone.offset(ts);
  }
  return { ts, o };
}
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
  const { setZone, zone } = opts;
  if (parsed && Object.keys(parsed).length !== 0) {
    const interpretationZone = parsedZone || zone, inst = DateTime.fromObject(parsed, {
      ...opts,
      zone: interpretationZone,
      specificOffset
    });
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", `the input "${text}" can't be parsed as ${format}`));
  }
}
function toTechFormat(dt, format, allowZ = true) {
  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
}
function toISODate(o, extended) {
  const longFormat = o.c.year > 9999 || o.c.year < 0;
  let c = "";
  if (longFormat && o.c.year >= 0)
    c += "+";
  c += padStart(o.c.year, longFormat ? 6 : 4);
  if (extended) {
    c += "-";
    c += padStart(o.c.month);
    c += "-";
    c += padStart(o.c.day);
  } else {
    c += padStart(o.c.month);
    c += padStart(o.c.day);
  }
  return c;
}
function toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone) {
  let c = padStart(o.c.hour);
  if (extended) {
    c += ":";
    c += padStart(o.c.minute);
    if (o.c.second !== 0 || !suppressSeconds) {
      c += ":";
    }
  } else {
    c += padStart(o.c.minute);
  }
  if (o.c.second !== 0 || !suppressSeconds) {
    c += padStart(o.c.second);
    if (o.c.millisecond !== 0 || !suppressMilliseconds) {
      c += ".";
      c += padStart(o.c.millisecond, 3);
    }
  }
  if (includeOffset) {
    if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
      c += "Z";
    } else if (o.o < 0) {
      c += "-";
      c += padStart(Math.trunc(-o.o / 60));
      c += ":";
      c += padStart(Math.trunc(-o.o % 60));
    } else {
      c += "+";
      c += padStart(Math.trunc(o.o / 60));
      c += ":";
      c += padStart(Math.trunc(o.o % 60));
    }
  }
  if (extendedZone) {
    c += "[" + o.zone.ianaName + "]";
  }
  return c;
}
var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
var defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
var defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
var orderedUnits2 = ["year", "month", "day", "hour", "minute", "second", "millisecond"];
var orderedWeekUnits = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
];
var orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function normalizeUnit(unit) {
  const normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized)
    throw new InvalidUnitError(unit);
  return normalized;
}
function quickDT(obj, opts) {
  const zone = normalizeZone(opts.zone, Settings.defaultZone), loc = Locale.fromObject(opts), tsNow = Settings.now();
  let ts, o;
  if (!isUndefined(obj.year)) {
    for (const u of orderedUnits2) {
      if (isUndefined(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }
    const invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
    if (invalid) {
      return DateTime.invalid(invalid);
    }
    const offsetProvis = zone.offset(tsNow);
    [ts, o] = objToTS(obj, offsetProvis, zone);
  } else {
    ts = tsNow;
  }
  return new DateTime({ ts, zone, loc, o });
}
function diffRelative(start, end, opts) {
  const round = isUndefined(opts.round) ? true : opts.round, format = (c, unit) => {
    c = roundTo(c, round || opts.calendary ? 0 : 2, true);
    const formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  }, differ = (unit) => {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else
        return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };
  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }
  for (const unit of opts.units) {
    const count = differ(unit);
    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }
  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}
function lastOpts(argList) {
  let opts = {}, args;
  if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }
  return [opts, args];
}
var DateTime = class {
  constructor(config) {
    const zone = config.zone || Settings.defaultZone;
    let invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    let c = null, o = null;
    if (!invalid) {
      const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
      if (unchanged) {
        [c, o] = [config.old.c, config.old.o];
      } else {
        const ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }
    this._zone = zone;
    this.loc = config.loc || Locale.create();
    this.invalid = invalid;
    this.weekData = null;
    this.c = c;
    this.o = o;
    this.isLuxonDateTime = true;
  }
  static now() {
    return new DateTime({});
  }
  static local() {
    const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }
  static utc() {
    const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
    opts.zone = FixedOffsetZone.utcInstance;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }
  static fromJSDate(date, options = {}) {
    const ts = isDate(date) ? date.valueOf() : NaN;
    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }
    const zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }
    return new DateTime({
      ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  static fromMillis(milliseconds, options = {}) {
    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError(`fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`);
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  static fromSeconds(seconds, options = {}) {
    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1e3,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  static fromObject(obj, opts = {}) {
    obj = obj || {};
    const zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }
    const tsNow = Settings.now(), offsetProvis = !isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow), normalized = normalizeObject(obj, normalizeUnit), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber, loc = Locale.fromObject(opts);
    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }
    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }
    const useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
    let units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits2;
      defaultValues = defaultUnitValues;
    }
    let foundFirst = false;
    for (const u of units) {
      const v = normalized[u];
      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    }
    const higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
    if (invalid) {
      return DateTime.invalid(invalid);
    }
    const gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse), inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc
    });
    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid("mismatched weekday", `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`);
    }
    return inst;
  }
  static fromISO(text, opts = {}) {
    const [vals, parsedZone] = parseISODate(text);
    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  static fromRFC2822(text, opts = {}) {
    const [vals, parsedZone] = parseRFC2822Date(text);
    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  static fromHTTP(text, opts = {}) {
    const [vals, parsedZone] = parseHTTPDate(text);
    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  static fromFormat(text, fmt, opts = {}) {
    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }
    const { locale = null, numberingSystem = null } = opts, localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true
    }), [vals, parsedZone, specificOffset, invalid] = parseFromTokens(localeToUse, text, fmt);
    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
    }
  }
  static fromString(text, fmt, opts = {}) {
    return DateTime.fromFormat(text, fmt, opts);
  }
  static fromSQL(text, opts = {}) {
    const [vals, parsedZone] = parseSQL(text);
    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({ invalid });
    }
  }
  static isDateTime(o) {
    return o && o.isLuxonDateTime || false;
  }
  static parseFormatForOpts(formatOpts, localeOpts = {}) {
    const tokenList = formatOptsToTokens(formatOpts, Locale.fromObject(localeOpts));
    return !tokenList ? null : tokenList.map((t) => t ? t.val : null).join("");
  }
  static expandFormat(fmt, localeOpts = {}) {
    const expanded = expandMacroTokens(Formatter.parseFormat(fmt), Locale.fromObject(localeOpts));
    return expanded.map((t) => t.val).join("");
  }
  get(unit) {
    return this[unit];
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  get zone() {
    return this._zone;
  }
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  get weekYear() {
    return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
  }
  get ordinal() {
    return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid ? Info.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  get monthLong() {
    return this.isValid ? Info.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  get weekdayShort() {
    return this.isValid ? Info.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get weekdayLong() {
    return this.isValid ? Info.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  get offsetNameShort() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale
      });
    } else {
      return null;
    }
  }
  get offsetNameLong() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale
      });
    } else {
      return null;
    }
  }
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  get isInDST() {
    if (this.isOffsetFixed) {
      return false;
    } else {
      return this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
    }
  }
  get isInLeapYear() {
    return isLeapYear(this.year);
  }
  get daysInMonth() {
    return daysInMonth(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? daysInYear(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
  }
  resolvedLocaleOptions(opts = {}) {
    const { locale, numberingSystem, calendar } = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this);
    return { locale, numberingSystem, outputCalendar: calendar };
  }
  toUTC(offset2 = 0, opts = {}) {
    return this.setZone(FixedOffsetZone.instance(offset2), opts);
  }
  toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
    zone = normalizeZone(zone, Settings.defaultZone);
    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      let newTS = this.ts;
      if (keepLocalTime || keepCalendarTime) {
        const offsetGuess = zone.offset(this.ts);
        const asObj = this.toObject();
        [newTS] = objToTS(asObj, offsetGuess, zone);
      }
      return clone2(this, { ts: newTS, zone });
    }
  }
  reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
    return clone2(this, { loc });
  }
  setLocale(locale) {
    return this.reconfigure({ locale });
  }
  set(values) {
    if (!this.isValid)
      return this;
    const normalized = normalizeObject(values, normalizeUnit), settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }
    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }
    let mixed;
    if (settingWeekStuff) {
      mixed = weekToGregorian({ ...gregorianToWeek(this.c), ...normalized });
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian({ ...gregorianToOrdinal(this.c), ...normalized });
    } else {
      mixed = { ...this.toObject(), ...normalized };
      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }
    const [ts, o] = objToTS(mixed, this.o, this.zone);
    return clone2(this, { ts, o });
  }
  plus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration);
    return clone2(this, adjustTime(this, dur));
  }
  minus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration).negate();
    return clone2(this, adjustTime(this, dur));
  }
  startOf(unit) {
    if (!this.isValid)
      return this;
    const o = {}, normalizedUnit = Duration.normalizeUnit(unit);
    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      case "quarters":
      case "months":
        o.day = 1;
      case "weeks":
      case "days":
        o.hour = 0;
      case "hours":
        o.minute = 0;
      case "minutes":
        o.second = 0;
      case "seconds":
        o.millisecond = 0;
        break;
      case "milliseconds":
        break;
    }
    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }
    if (normalizedUnit === "quarters") {
      const q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }
    return this.set(o);
  }
  endOf(unit) {
    return this.isValid ? this.plus({ [unit]: 1 }).startOf(unit).minus(1) : this;
  }
  toFormat(fmt, opts = {}) {
    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID3;
  }
  toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
    return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID3;
  }
  toLocaleParts(opts = {}) {
    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  toISO({
    format = "extended",
    suppressSeconds = false,
    suppressMilliseconds = false,
    includeOffset = true,
    extendedZone = false
  } = {}) {
    if (!this.isValid) {
      return null;
    }
    const ext = format === "extended";
    let c = toISODate(this, ext);
    c += "T";
    c += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
    return c;
  }
  toISODate({ format = "extended" } = {}) {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, format === "extended");
  }
  toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds = false,
    suppressSeconds = false,
    includeOffset = true,
    includePrefix = false,
    extendedZone = false,
    format = "extended"
  } = {}) {
    if (!this.isValid) {
      return null;
    }
    let c = includePrefix ? "T" : "";
    return c + toISOTime(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
  }
  toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, true);
  }
  toSQLTime({ includeOffset = true, includeZone = false, includeOffsetSpace = true } = {}) {
    let fmt = "HH:mm:ss.SSS";
    if (includeZone || includeOffset) {
      if (includeOffsetSpace) {
        fmt += " ";
      }
      if (includeZone) {
        fmt += "z";
      } else if (includeOffset) {
        fmt += "ZZ";
      }
    }
    return toTechFormat(this, fmt, true);
  }
  toSQL(opts = {}) {
    if (!this.isValid) {
      return null;
    }
    return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
  }
  toString() {
    return this.isValid ? this.toISO() : INVALID3;
  }
  valueOf() {
    return this.toMillis();
  }
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  toJSON() {
    return this.toISO();
  }
  toBSON() {
    return this.toJSDate();
  }
  toObject(opts = {}) {
    if (!this.isValid)
      return {};
    const base = { ...this.c };
    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }
    return base;
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(otherDateTime, unit = "milliseconds", opts = {}) {
    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid("created by diffing an invalid DateTime");
    }
    const durOpts = { locale: this.locale, numberingSystem: this.numberingSystem, ...opts };
    const units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = diff_default(earlier, later, units, durOpts);
    return otherIsLater ? diffed.negate() : diffed;
  }
  diffNow(unit = "milliseconds", opts = {}) {
    return this.diff(DateTime.now(), unit, opts);
  }
  until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  hasSame(otherDateTime, unit) {
    if (!this.isValid)
      return false;
    const inputMs = otherDateTime.valueOf();
    const adjustedToZone = this.setZone(otherDateTime.zone, { keepLocalTime: true });
    return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
  }
  equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  toRelative(options = {}) {
    if (!this.isValid)
      return null;
    const base = options.base || DateTime.fromObject({}, { zone: this.zone }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    let units = ["years", "months", "days", "hours", "minutes", "seconds"];
    let unit = options.unit;
    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = void 0;
    }
    return diffRelative(base, this.plus(padding), {
      ...options,
      numeric: "always",
      units,
      unit
    });
  }
  toRelativeCalendar(options = {}) {
    if (!this.isValid)
      return null;
    return diffRelative(options.base || DateTime.fromObject({}, { zone: this.zone }), this, {
      ...options,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    });
  }
  static min(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, (i) => i.valueOf(), Math.min);
  }
  static max(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, (i) => i.valueOf(), Math.max);
  }
  static fromFormatExplain(text, fmt, options = {}) {
    const { locale = null, numberingSystem = null } = options, localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  static fromStringExplain(text, fmt, options = {}) {
    return DateTime.fromFormatExplain(text, fmt, options);
  }
  static get DATE_SHORT() {
    return DATE_SHORT;
  }
  static get DATE_MED() {
    return DATE_MED;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return DATE_MED_WITH_WEEKDAY;
  }
  static get DATE_FULL() {
    return DATE_FULL;
  }
  static get DATE_HUGE() {
    return DATE_HUGE;
  }
  static get TIME_SIMPLE() {
    return TIME_SIMPLE;
  }
  static get TIME_WITH_SECONDS() {
    return TIME_WITH_SECONDS;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return TIME_WITH_SHORT_OFFSET;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return TIME_WITH_LONG_OFFSET;
  }
  static get TIME_24_SIMPLE() {
    return TIME_24_SIMPLE;
  }
  static get TIME_24_WITH_SECONDS() {
    return TIME_24_WITH_SECONDS;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return TIME_24_WITH_SHORT_OFFSET;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return TIME_24_WITH_LONG_OFFSET;
  }
  static get DATETIME_SHORT() {
    return DATETIME_SHORT;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return DATETIME_SHORT_WITH_SECONDS;
  }
  static get DATETIME_MED() {
    return DATETIME_MED;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return DATETIME_MED_WITH_SECONDS;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return DATETIME_MED_WITH_WEEKDAY;
  }
  static get DATETIME_FULL() {
    return DATETIME_FULL;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return DATETIME_FULL_WITH_SECONDS;
  }
  static get DATETIME_HUGE() {
    return DATETIME_HUGE;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return DATETIME_HUGE_WITH_SECONDS;
  }
};
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError(`Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`);
  }
}

// src/repeat/utils.ts
function diffSymmetrically(now2, then, resolution) {
  if (now2 > then) {
    return now2.diff(then, resolution).toObject();
  }
  return then.diff(now2, resolution).toObject();
}
function summarizeDueAt(dueAt, now2 = DateTime.now()) {
  if (!dueAt) {
    return "";
  }
  const resolution = ["years", "months", "days", "hours", "minutes", "seconds"];
  const diff = diffSymmetrically(dueAt, now2, resolution);
  let leadingUnit;
  resolution.forEach((unit) => {
    if (leadingUnit === void 0 && diff[unit] > 0) {
      leadingUnit = unit;
    }
  });
  if (leadingUnit === void 0 || leadingUnit === "seconds") {
    return "a moment";
  }
  let reportUnits;
  if (leadingUnit === "years") {
    reportUnits = ["years", "months"];
  }
  if (leadingUnit === "months") {
    reportUnits = ["months", "days"];
  }
  if (leadingUnit === "days") {
    if (diff[leadingUnit] < 7) {
      reportUnits = ["days", "hours"];
    } else {
      reportUnits = ["days"];
    }
  }
  if (leadingUnit === "hours") {
    if (diff[leadingUnit] < 12) {
      reportUnits = ["hours", "minutes"];
    } else {
      reportUnits = ["hours"];
    }
  }
  if (leadingUnit === "minutes") {
    reportUnits = ["minutes"];
  }
  const diffSequence = (reportUnits || []).map((units) => {
    const value = diff[units];
    const summary = `${value} ${value === 1 ? units.slice(0, -1) : units}`;
    return {
      summary,
      units,
      value
    };
  }).filter(({ value }) => value !== 0);
  if (diffSequence.length > 1) {
    return [diffSequence[0].summary, "and", diffSequence[1].summary].join(" ");
  }
  if (diffSequence.length === 0) {
    return "a moment";
  }
  return diffSequence[0].summary;
}
function summarizeDueAtWithPrefix(dueAt, now2 = DateTime.now()) {
  const diffSummary = summarizeDueAt(dueAt, now2);
  if (dueAt > now2) {
    return ["in", diffSummary].join(" ");
  }
  return ["overdue by", diffSummary].join(" ");
}

// src/utils.ts
function uniqByField(array, field) {
  return [...array.reduce((map, item) => {
    const key = item == null ? item : item[field];
    if (!map.has(key)) {
      map.set(key, item);
    }
    return map;
  }, /* @__PURE__ */ new Map()).values()];
}

// src/repeat/parsers.ts
var import_obsidian = require("obsidian");

// src/settings.ts
var DEFAULT_SETTINGS = {
  showDueCountInStatusBar: true,
  showRibbonIcon: true,
  ignoreFolderPath: "",
  morningReviewTime: "06:00",
  eveningReviewTime: "18:00",
  defaultRepeat: {
    repeatStrategy: "SPACED",
    repeatPeriod: 1,
    repeatPeriodUnit: "DAY",
    repeatTimeOfDay: "AM"
  },
  enqueueNonRepeatingNotes: false,
  filterQuery: "",
  savedFilters: []
};

// src/repeat/parsers.ts
var joinedUnits = "hour|day|week|month|year";
var weekdayNames = {
  "monday": "monday",
  "mon": "monday",
  "tuesday": "tuesday",
  "tue": "tuesday",
  "tues": "tuesday",
  "wednesday": "wednesday",
  "wed": "wednesday",
  "thursday": "thursday",
  "thu": "thursday",
  "thur": "thursday",
  "thurs": "thursday",
  "friday": "friday",
  "fri": "friday",
  "saturday": "saturday",
  "sat": "saturday",
  "sunday": "sunday",
  "sun": "sunday"
};
function parseWeekdays(weekdayString) {
  const weekdays2 = [];
  const parts = weekdayString.toLowerCase().split(/,\s*|\s+and\s+|\s*&\s*/);
  for (const part of parts) {
    const trimmed = part.trim();
    if (weekdayNames[trimmed]) {
      weekdays2.push(weekdayNames[trimmed]);
    }
  }
  return weekdays2.length > 0 ? weekdays2 : [];
}
function parseRepeatPeriodUnit(unitDescription) {
  var _a;
  const processedUnitDescription = unitDescription.trim();
  switch (processedUnitDescription) {
    case "daily":
      return "DAY";
    case "weekly":
      return "WEEK";
    case "monthly":
      return "MONTH";
    case "yearly":
    case "annually":
      return "YEAR";
    default:
      break;
  }
  const unitRegex = new RegExp(`every (\\d+ )?(?<unit>${joinedUnits})s?`);
  let result;
  if (result = unitRegex.exec(processedUnitDescription)) {
    switch ((((_a = result == null ? void 0 : result.groups) == null ? void 0 : _a.unit) || "").trim()) {
      case "hour":
        return "HOUR";
      case "day":
        return "DAY";
      case "week":
        return "WEEK";
      case "month":
        return "MONTH";
      case "year":
        return "YEAR";
      default:
        break;
    }
  }
  return "DAY";
}
function parseRepeatTimeOfDay(timeOfDaySuffix) {
  const processedTimeOfDaySuffix = timeOfDaySuffix.trim();
  if (processedTimeOfDaySuffix === "in the evening" || processedTimeOfDaySuffix === "pm") {
    return "PM";
  }
  return "AM";
}
function parseRepeat(repeat) {
  var _a, _b, _c, _d;
  let processedRepeat = repeat.toLowerCase();
  let repeatStrategy = "PERIODIC";
  const spacedRegex = /^spaced ?/;
  if (processedRepeat.match(spacedRegex)) {
    repeatStrategy = "SPACED";
    processedRepeat = processedRepeat.split(spacedRegex)[1];
  }
  const weekdayRegex = /^every\s+(.+?)(?<timeOfDaySuffix>\s+in\s+the\s+(morning|evening)|\s+(am|pm))?$/;
  let result = weekdayRegex.exec(processedRepeat);
  if (result) {
    const weekdayString = result[1];
    const weekdays2 = parseWeekdays(weekdayString);
    if (weekdays2.length > 0) {
      return {
        repeatStrategy,
        repeatPeriod: 1,
        repeatPeriodUnit: "WEEKDAYS",
        repeatTimeOfDay: parseRepeatTimeOfDay(((_a = result == null ? void 0 : result.groups) == null ? void 0 : _a.timeOfDaySuffix) || DEFAULT_SETTINGS.defaultRepeat.repeatTimeOfDay),
        repeatWeekdays: weekdays2
      };
    }
  }
  const repetitionRegex = new RegExp(`(?<description>daily|weekly|monthly|yearly|annually|((every (${joinedUnits})|every (?<period>\\d+) (${joinedUnits})s?)))(?<timeOfDaySuffix>.*)`);
  result = repetitionRegex.exec(processedRepeat);
  if (result) {
    return {
      repeatStrategy,
      repeatPeriod: parseInt(((_b = result == null ? void 0 : result.groups) == null ? void 0 : _b.period) || String(DEFAULT_SETTINGS.defaultRepeat.repeatPeriod)),
      repeatPeriodUnit: parseRepeatPeriodUnit(((_c = result == null ? void 0 : result.groups) == null ? void 0 : _c.description) || DEFAULT_SETTINGS.defaultRepeat.repeatPeriodUnit),
      repeatTimeOfDay: parseRepeatTimeOfDay(((_d = result == null ? void 0 : result.groups) == null ? void 0 : _d.timeOfDaySuffix) || DEFAULT_SETTINGS.defaultRepeat.repeatTimeOfDay)
    };
  }
  return DEFAULT_SETTINGS.defaultRepeat;
}
function isRepeatDisabled(repeatFieldValue) {
  const booleanRegex = new RegExp("^(n|no|false|off|never)$", "i");
  return booleanRegex.test(repeatFieldValue);
}
function parseRepeatDueAt(repeatDueAt, repeat, referenceDateTime) {
  if (repeatDueAt) {
    const parsedDueAtMaybe = DateTime.fromISO(repeatDueAt);
    if (!parsedDueAtMaybe.invalid) {
      return parsedDueAtMaybe;
    }
  }
  if (repeat) {
    if (repeat.repeatPeriodUnit === "WEEKDAYS" && repeat.repeatWeekdays) {
      const weekdayNumbers = {
        "monday": 1,
        "tuesday": 2,
        "wednesday": 3,
        "thursday": 4,
        "friday": 5,
        "saturday": 6,
        "sunday": 7
      };
      const targetWeekdays = repeat.repeatWeekdays.map((day) => weekdayNumbers[day]).sort();
      for (let daysAhead = 1; daysAhead <= 7; daysAhead++) {
        const candidateDate = referenceDateTime.plus({ days: daysAhead });
        if (targetWeekdays.includes(candidateDate.weekday)) {
          return candidateDate;
        }
      }
      return referenceDateTime.plus({ days: 1 });
    }
    return referenceDateTime.plus({
      [repeat.repeatPeriodUnit.toLowerCase()]: repeat.repeatPeriod
    });
  }
  return referenceDateTime;
}
function parseYamlBoolean(value) {
  if (!value) {
    return false;
  }
  const booleanRegex = new RegExp("^(y|yes|true|on)$");
  return booleanRegex.test(value);
}
function formRepetition(parsedRepeat, repeatDueAt, hidden, referenceDateTime, virtual) {
  return {
    ...parsedRepeat,
    hidden: parseYamlBoolean(hidden),
    virtual: virtual || false,
    repeatDueAt: parseRepeatDueAt(repeatDueAt, parsedRepeat, referenceDateTime || DateTime.now())
  };
}
function parseRepetitionFields(repeat, repeatDueAt, hidden, referenceDateTime) {
  const parsedRepeat = parseRepeat(repeat);
  return formRepetition(parsedRepeat, repeatDueAt, hidden, referenceDateTime);
}
function parseRepetitionFromMarkdown(markdown) {
  const bounds = determineFrontmatterBounds(markdown);
  if (bounds) {
    const { repeat, due_at, hidden } = (0, import_obsidian.parseYaml)(markdown.slice(...bounds)) || {};
    if (repeat && !isRepeatDisabled(repeat)) {
      return parseRepetitionFields(repeat, due_at || void 0, hidden);
    }
  }
  return void 0;
}
function parseHiddenFieldFromMarkdown(markdown) {
  const frontmatterBounds = determineFrontmatterBounds(markdown);
  const frontmatter = (frontmatterBounds == null ? void 0 : frontmatterBounds.length) ? markdown.slice(...frontmatterBounds) : "";
  if (frontmatter) {
    const { hidden: extractedHidden } = (0, import_obsidian.parseYaml)(frontmatter);
    return parseYamlBoolean(extractedHidden);
  }
  return false;
}
function parseTime(twentyFourHourTime) {
  const [hourString, minuteString] = twentyFourHourTime.split(":");
  return {
    hour: parseInt(hourString),
    minute: parseInt(minuteString)
  };
}

// src/repeat/choices.ts
var DISMISS_BUTTON_TEXT = "Dismiss";
var NEVER_BUTTON_TEXT = "Never";
var SKIP_PERIOD_MINUTES = 5;
var SKIP_BUTTON_TEXT = `${SKIP_PERIOD_MINUTES} minutes (skip)`;
function getNextWeekdayOccurrence(currentDate, weekdays2, timeOfDay, morningTime, eveningTime) {
  const weekdayNumbers = {
    "sunday": 7,
    "monday": 1,
    "tuesday": 2,
    "wednesday": 3,
    "thursday": 4,
    "friday": 5,
    "saturday": 6
  };
  const targetWeekdays = weekdays2.map((day) => weekdayNumbers[day]).sort();
  const reviewTime = timeOfDay === "AM" ? morningTime : eveningTime;
  for (let daysAhead = 1; daysAhead <= 7; daysAhead++) {
    const candidateDate = currentDate.plus({ days: daysAhead });
    const candidateWeekday = candidateDate.weekday;
    if (targetWeekdays.includes(candidateWeekday)) {
      const candidateDateTime = candidateDate.set({
        hour: reviewTime.hour,
        minute: reviewTime.minute,
        second: 0,
        millisecond: 0
      });
      return candidateDateTime;
    }
  }
  return currentDate.plus({ days: 1 }).set({
    hour: reviewTime.hour,
    minute: reviewTime.minute,
    second: 0,
    millisecond: 0
  });
}
function incrementRepeatDueAt({
  repeatDueAt,
  repeatPeriodUnit,
  repeatPeriod,
  repeatTimeOfDay,
  repeatWeekdays
}, settings) {
  const now2 = DateTime.now();
  const dueAt = repeatDueAt != null ? repeatDueAt : now2.minus({ second: 1 });
  const morningReviewTime = parseTime(settings.morningReviewTime);
  const eveningReviewTime = parseTime(settings.eveningReviewTime);
  if (repeatPeriodUnit === "WEEKDAYS" && repeatWeekdays && repeatWeekdays.length > 0) {
    return getNextWeekdayOccurrence(now2, repeatWeekdays, repeatTimeOfDay, morningReviewTime, eveningReviewTime);
  }
  let repetitions = 1;
  if (dueAt <= now2) {
    const overdueBy = now2.diff(dueAt);
    const repeatPeriodDuration = Duration.fromObject({
      [repeatPeriodUnit.toLowerCase()]: repeatPeriod
    });
    repetitions = Math.ceil(overdueBy / repeatPeriodDuration);
  }
  const nextRepeatDueAt = dueAt.plus({
    [repeatPeriodUnit.toLowerCase()]: repetitions * repeatPeriod
  }).set(repeatTimeOfDay === "AM" ? {
    hour: morningReviewTime.hour,
    minute: morningReviewTime.minute,
    second: 0,
    millisecond: 0
  } : {
    hour: eveningReviewTime.hour,
    minute: eveningReviewTime.minute,
    second: 0,
    millisecond: 0
  });
  if (nextRepeatDueAt < now2) {
    return nextRepeatDueAt.plus({
      days: 1
    });
  }
  return nextRepeatDueAt;
}
function summarizeWeekdayDueAt(dueAt, now2) {
  const dayName = dueAt.toFormat("cccc");
  const currentWeekday = now2.weekday;
  const dueWeekday = dueAt.weekday;
  const startOfCurrentWeek = now2.startOf("week");
  const startOfDueWeek = dueAt.startOf("week");
  if (startOfCurrentWeek.equals(startOfDueWeek) && dueWeekday > currentWeekday) {
    return dayName;
  }
  return `next ${dayName}`;
}
var getSkipDateTime = (now2) => now2.plus({
  minutes: SKIP_PERIOD_MINUTES
});
function getPeriodicRepeatChoices(repetition, now2, settings) {
  const { repeatDueAt } = repetition;
  if (repeatDueAt > now2 || !repeatDueAt) {
    return [{
      text: DISMISS_BUTTON_TEXT,
      nextRepetition: "DISMISS"
    }];
  }
  const nextRepeatDueAt = incrementRepeatDueAt({ ...repetition }, settings);
  const choices = [{
    text: SKIP_BUTTON_TEXT,
    nextRepetition: {
      ...repetition,
      repeatDueAt: getSkipDateTime(now2)
    }
  }, {
    text: repetition.repeatPeriodUnit === "WEEKDAYS" ? summarizeWeekdayDueAt(nextRepeatDueAt, now2) : summarizeDueAt(nextRepeatDueAt, now2),
    nextRepetition: {
      ...repetition,
      repeatDueAt: nextRepeatDueAt
    }
  }];
  if (settings.enqueueNonRepeatingNotes && repetition.virtual) {
    choices.push({
      text: NEVER_BUTTON_TEXT,
      nextRepetition: "NEVER"
    });
  }
  return choices;
}
function getSpacedRepeatChoices(repetition, now2, settings) {
  const {
    repeatPeriod,
    repeatPeriodUnit,
    repeatTimeOfDay
  } = repetition;
  const { repeatDueAt } = repetition;
  if (repeatDueAt > now2 || !repeatDueAt) {
    return [{
      text: DISMISS_BUTTON_TEXT,
      nextRepetition: "DISMISS"
    }];
  }
  const morningReviewTime = parseTime(settings.morningReviewTime);
  const eveningReviewTime = parseTime(settings.eveningReviewTime);
  const multiplierChoices = [0.5, 1, 1.5, 2].map((multiplier) => {
    let nextRepeatDueAt = now2.plus({
      [repeatPeriodUnit]: multiplier * repeatPeriod
    });
    if (nextRepeatDueAt.minus({ days: 7 }) >= now2) {
      nextRepeatDueAt = nextRepeatDueAt.set(repeatTimeOfDay === "AM" ? {
        hour: morningReviewTime.hour,
        minute: morningReviewTime.minute,
        second: 0,
        millisecond: 0
      } : {
        hour: eveningReviewTime.hour,
        minute: eveningReviewTime.minute,
        second: 0,
        millisecond: 0
      });
    }
    let { hours } = nextRepeatDueAt.diff(now2, "hours").values || {};
    if (!hours || hours < 1) {
      hours = 1;
    }
    hours = Math.round(hours);
    return {
      text: `${summarizeDueAt(nextRepeatDueAt, now2)} (x${multiplier})`,
      nextRepetition: {
        ...repetition,
        repeatDueAt: nextRepeatDueAt,
        repeatPeriod: hours,
        repeatPeriodUnit: "HOUR"
      }
    };
  });
  const choices = [
    {
      text: SKIP_BUTTON_TEXT,
      nextRepetition: {
        ...repetition,
        repeatDueAt: getSkipDateTime(now2)
      }
    },
    ...multiplierChoices
  ];
  if (settings.enqueueNonRepeatingNotes && repetition.virtual) {
    choices.push({
      text: NEVER_BUTTON_TEXT,
      nextRepetition: "NEVER"
    });
  }
  return uniqByField(choices, "text");
}
function getRepeatChoices(repetition, settings) {
  if (!repetition) {
    return [];
  }
  const { repeatStrategy, repeatPeriodUnit } = repetition;
  const now2 = DateTime.now();
  if (repeatStrategy === "PERIODIC" || repeatPeriodUnit === "WEEKDAYS") {
    return getPeriodicRepeatChoices(repetition, now2, settings);
  }
  if (repeatStrategy === "SPACED") {
    return getSpacedRepeatChoices(repetition, now2, settings);
  }
  return [{
    text: DISMISS_BUTTON_TEXT,
    nextRepetition: "DISMISS"
  }];
}

// src/repeat/queries.ts
function getNotesDue(dv, ignoreFolderPath, ignoreFilePath, enqueueNonRepeatingNotes, defaultRepeat, filterQuery) {
  const now2 = DateTime.now();
  return dv == null ? void 0 : dv.pages(filterQuery || void 0).mutate((page) => {
    const { repeat, due_at, hidden } = page.file.frontmatter || {};
    if (isRepeatDisabled(repeat)) {
      page.repetition = void 0;
      return page;
    } else if (!repeat) {
      if (enqueueNonRepeatingNotes) {
        page.repetition = formRepetition(defaultRepeat, void 0, void 0, page.file.ctime, true);
        return page;
      } else {
        page.repetition = void 0;
        return page;
      }
    } else {
      page.repetition = parseRepetitionFields(repeat, due_at, hidden, page.file.ctime);
      return page;
    }
  }).where((page) => {
    const { repetition } = page;
    if (!repetition) {
      return false;
    } else if (ignoreFolderPath && page.file.folder.startsWith(ignoreFolderPath)) {
      return false;
    } else if (ignoreFilePath && page.file.path === ignoreFilePath) {
      return false;
    } else {
      return repetition.repeatDueAt <= now2;
    }
  }).sort((page) => {
    return [page.repetition.virtual ? 1 : 0, page.repetition.repeatDueAt];
  }, "asc");
}
function getNextDueNote(dv, ignoreFolderPath, ignoreFilePath, enqueueNonRepeatingNotes, defaultRepeat, filterQuery) {
  var _a;
  const page = (_a = getNotesDue(dv, ignoreFolderPath, ignoreFilePath, enqueueNonRepeatingNotes, defaultRepeat, filterQuery)) == null ? void 0 : _a.first();
  if (!page) {
    return;
  }
  return page;
}
function getTagsFromDueNotes(dv, ignoreFolderPath, ignoreFilePath, enqueueNonRepeatingNotes, defaultRepeat) {
  const dueNotes = getNotesDue(dv, ignoreFolderPath, ignoreFilePath, enqueueNonRepeatingNotes, defaultRepeat);
  if (!dueNotes)
    return void 0;
  const tagCounts = /* @__PURE__ */ new Map();
  dueNotes.forEach((page) => {
    var _a;
    const tags = ((_a = page.file.etags) == null ? void 0 : _a.values) || [];
    tags.forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    });
  });
  return Array.from(tagCounts.entries()).map(([tag, count]) => ({ tag, count })).sort((a, b) => {
    if (b.count !== a.count)
      return b.count - a.count;
    return a.tag.localeCompare(b.tag);
  });
}

// src/markdown.ts
var import_obsidian2 = require("obsidian");
var EmbedType = /* @__PURE__ */ ((EmbedType2) => {
  EmbedType2["Image"] = "Image";
  EmbedType2["Audio"] = "Audio";
  EmbedType2["Video"] = "Video";
  EmbedType2["PDF"] = "PDF";
  EmbedType2["Note"] = "Note";
  EmbedType2["Unknown"] = "Unknown";
  return EmbedType2;
})(EmbedType || {});
var embedTypeToAcceptedExtensions = {
  ["Image" /* Image */]: ["png", "webp", "jpg", "jpeg", "gif", "bmp", "svg"],
  ["Audio" /* Audio */]: ["mp3", "webm", "wav", "m4a", "ogg", "3gp", "flac"],
  ["Video" /* Video */]: ["mp4", "webm", "ogv", "mov", "mkv"],
  ["PDF" /* PDF */]: ["pdf"]
};
var embedTypeToSrcRegex = {};
Object.keys(embedTypeToAcceptedExtensions).forEach((key) => {
  embedTypeToSrcRegex[key] = new RegExp([
    ".+\\.(",
    embedTypeToAcceptedExtensions[key].join("|"),
    ").*"
  ].join(""), "i");
});
function getClosestMatchingFilePath(vault, mediaSrc, containingNotePath) {
  const containingDir = (() => {
    const parts = containingNotePath.split("/");
    parts.pop();
    return parts.join("/");
  })();
  let normalizedPathSuffix = mediaSrc;
  if (mediaSrc.startsWith(".")) {
    const resourcePathParts = containingNotePath.split("/");
    resourcePathParts.pop();
    for (const suffixPart of mediaSrc.split("/")) {
      if (suffixPart === "..") {
        resourcePathParts.pop();
      } else if (suffixPart === ".") {
        continue;
      } else {
        resourcePathParts.push(suffixPart);
      }
    }
    normalizedPathSuffix = resourcePathParts.join("/");
  }
  const allMatches = [];
  for (const file of vault.getFiles()) {
    if (file.path.endsWith(normalizedPathSuffix)) {
      if (file.path === normalizedPathSuffix) {
        return file.path;
      }
      allMatches.push(file.path);
    }
  }
  allMatches.sort((left, right) => {
    if (left.startsWith(containingDir) && !right.startsWith(containingDir)) {
      return -1;
    }
    if (right.startsWith(containingDir) && !left.startsWith(containingDir)) {
      return 1;
    }
    return left <= right ? -1 : 1;
  });
  if (allMatches) {
    return allMatches[0];
  }
  return mediaSrc;
}
var getMediaUri = (vault, mediaSrc, containingNotePath) => {
  const matchingPath = getClosestMatchingFilePath(vault, mediaSrc, containingNotePath);
  return vault.adapter.getResourcePath(matchingPath);
};
var getNoteUri = (vault, noteHref) => [
  "obsidian://open?vault=",
  encodeURIComponent(vault.getName()),
  "&file=",
  encodeURIComponent(noteHref)
].join("");
function determineEmbedType(node) {
  const src = node.getAttribute("src");
  if (!src) {
    return "Unknown" /* Unknown */;
  }
  for (const [embedTypeKey, embedTypeRegex] of Object.entries(embedTypeToSrcRegex)) {
    if (src.match(embedTypeRegex)) {
      return EmbedType[embedTypeKey];
    }
  }
  return "Note" /* Note */;
}
async function renderMarkdown(app, markdown, outerContainer, sourcePath, lifecycleComponent, vault) {
  const innerContainer = createEl("div", {
    cls: ["markdown-preview-view", "markdown-rendered"]
  });
  const contentContainer = createEl("div", {
    cls: ["markdown-preview-sizer markdown-preview-section"]
  });
  outerContainer.appendChild(innerContainer);
  innerContainer.appendChild(contentContainer);
  await import_obsidian2.MarkdownRenderer.render(app, markdown, contentContainer, sourcePath, lifecycleComponent);
  const nodes = contentContainer.querySelectorAll("span.internal-embed");
  nodes.forEach((node) => {
    const embedType = determineEmbedType(node);
    if (embedType === "Image" /* Image */) {
      const img = createEl("img");
      img.src = getMediaUri(vault, node.getAttribute("src"), sourcePath);
      node.empty();
      node.appendChild(img);
    } else if (embedType === "Audio" /* Audio */) {
      const audio = createEl("audio");
      audio.controls = true;
      audio.src = getMediaUri(vault, node.getAttribute("src"), sourcePath);
      node.empty();
      node.appendChild(audio);
    } else if (embedType === "Video" /* Video */) {
      const video = createEl("video");
      video.controls = true;
      video.src = getMediaUri(vault, node.getAttribute("src"), sourcePath);
      node.empty();
      node.appendChild(video);
    } else if (embedType === "PDF" /* PDF */) {
      if (!import_obsidian2.Platform.isDesktop) {
        console.error("Repeat Plugin: Embedded PDFs are only supported on the desktop.");
        return;
      }
      const iframe = createEl("iframe");
      iframe.src = getMediaUri(vault, node.getAttribute("src"), sourcePath);
      iframe.width = "100%";
      iframe.height = "800px";
      node.empty();
      node.appendChild(iframe);
    } else if (embedType === "Note" /* Note */) {
      console.error("Repeat Plugin: Embedded notes are not yet supported.");
    } else {
      console.error("Repeat Plugin: Could not determine embedding type for element:");
      console.error(node);
    }
  });
  const links = contentContainer.querySelectorAll("a.internal-link");
  links.forEach((node) => {
    if (!node.getAttribute("href")) {
      return;
    }
    node.href = getNoteUri(vault, node.getAttribute("href"));
  });
}
async function renderTitleElement(container, file, vault) {
  const embedTitle = createEl("div", { cls: [
    "markdown-embed-title",
    "embed-title",
    "repeat-markdown_embed_title"
  ] });
  embedTitle.setText(file.basename);
  const embedLink = createEl("a", {
    cls: "markdown-embed-link",
    attr: {
      "data-href": file.basename,
      "href": getNoteUri(vault, file.path),
      "target": "_blank",
      "rel": "noopener"
    }
  });
  (0, import_obsidian2.setIcon)(embedLink, "link");
  container.appendChild(embedTitle);
  container.appendChild(embedLink);
}

// src/repeat/obsidian/TextInputModal.ts
var import_obsidian3 = require("obsidian");
var TextInputModal = class extends import_obsidian3.Modal {
  constructor(app, title, prompt, defaultValue, onSubmit) {
    super(app);
    this.title = title;
    this.prompt = prompt;
    this.defaultValue = defaultValue;
    this.onSubmit = onSubmit;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.createEl("h2", { text: this.title });
    new import_obsidian3.Setting(contentEl).setName(this.prompt).addText((text) => {
      this.inputEl = text.inputEl;
      text.setValue(this.defaultValue);
      text.inputEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          this.submit();
        }
      });
    });
    new import_obsidian3.Setting(contentEl).addButton((btn) => btn.setButtonText("Cancel").onClick(() => {
      this.close();
      this.onSubmit(null);
    })).addButton((btn) => btn.setButtonText("Save").setCta().onClick(() => this.submit()));
  }
  submit() {
    var _a;
    const value = (_a = this.inputEl) == null ? void 0 : _a.value.trim();
    this.close();
    this.onSubmit(value || null);
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var TextInputModal_default = TextInputModal;

// src/repeat/obsidian/RepeatView.tsx
var MODIFY_DEBOUNCE_MS = 1 * 1e3;
var QUERY_DEBOUNCE_MS = 500;
var REPEATING_NOTES_DUE_VIEW = "repeating-notes-due-view";
var RepeatView = class extends import_obsidian4.ItemView {
  constructor(leaf, settings, saveSettings) {
    super(leaf);
    this.icon = "clock";
    this.addRepeatButton = this.addRepeatButton.bind(this);
    this.disableExternalHandlers = this.disableExternalHandlers.bind(this);
    this.enableExternalHandlers = this.enableExternalHandlers.bind(this);
    this.handleExternalModifyOrDelete = (0, import_obsidian4.debounce)(this.handleExternalModifyOrDelete, MODIFY_DEBOUNCE_MS).bind(this);
    this.handleExternalRename = (0, import_obsidian4.debounce)(this.handleExternalRename, MODIFY_DEBOUNCE_MS).bind(this);
    this.promiseMetadataChangeOrTimeOut = this.promiseMetadataChangeOrTimeOut.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.setPage = this.setPage.bind(this);
    this.resetView = this.resetView.bind(this);
    this.createFilterUI = this.createFilterUI.bind(this);
    this.refreshFilterUI = this.refreshFilterUI.bind(this);
    this.doHandleQueryChange = this.doHandleQueryChange.bind(this);
    this.handleQueryChange = (0, import_obsidian4.debounce)(this.doHandleQueryChange, QUERY_DEBOUNCE_MS);
    this.handleTagClick = this.handleTagClick.bind(this);
    this.handleClearQuery = this.handleClearQuery.bind(this);
    this.handleSaveFilter = this.handleSaveFilter.bind(this);
    this.handleLoadSavedFilter = this.handleLoadSavedFilter.bind(this);
    this.handleDeleteSavedFilter = this.handleDeleteSavedFilter.bind(this);
    this.handleShowMoreTags = this.handleShowMoreTags.bind(this);
    this.toggleFilterDrawer = this.toggleFilterDrawer.bind(this);
    this.filterExpanded = false;
    this.component = new import_obsidian4.Component();
    this.dv = (0, import_obsidian_dataview.getAPI)(this.app);
    this.settings = settings;
    this.saveSettings = saveSettings;
    this.availableTags = [];
    this.displayedTagCount = 6;
    this.root = this.containerEl.children[1];
    this.indexPromise = new Promise((resolve, reject) => {
      const resolver = () => resolve(null);
      if (!this.dv) {
        return reject(null);
      }
      this.registerEvent(this.app.metadataCache.on("dataview:index-ready", resolver));
      if (this.dv.index.initialized) {
        this.app.metadataCache.off("dataview:index-ready", resolver);
        resolve(null);
      }
    });
    this.resetView();
    this.setMessage("Loading...");
  }
  getViewType() {
    return REPEATING_NOTES_DUE_VIEW;
  }
  getDisplayText() {
    return "Repeat";
  }
  async onOpen() {
    if (!this.dv) {
      this.setMessage("Repeat Plugin requires DataView Plugin to work. Make sure that the DataView Plugin is installed and enabled.");
      return;
    }
    this.enableExternalHandlers();
    this.setPage();
  }
  async onClose() {
    this.disableExternalHandlers();
  }
  enableExternalHandlers() {
    this.registerEvent(this.app.vault.on("modify", this.handleExternalModifyOrDelete));
    this.registerEvent(this.app.vault.on("delete", this.handleExternalModifyOrDelete));
    this.registerEvent(this.app.vault.on("rename", this.handleExternalRename));
  }
  disableExternalHandlers() {
    this.app.vault.off("modify", this.handleExternalModifyOrDelete);
    this.app.vault.off("delete", this.handleExternalModifyOrDelete);
    this.app.vault.off("rename", this.handleExternalRename);
  }
  async promiseMetadataChangeOrTimeOut() {
    let resolver;
    return new Promise((resolve) => {
      resolver = (_, eventFile, previousPath) => {
        if ((eventFile == null ? void 0 : eventFile.path) === this.currentDueFilePath || previousPath === this.currentDueFilePath) {
          resolve(null);
        }
      };
      this.registerEvent(this.app.metadataCache.on("dataview:metadata-change", resolver));
      setTimeout(resolve, 100);
    }).then(() => {
      this.app.metadataCache.off("dataview:metadata-change", resolver);
    });
  }
  async handleExternalModifyOrDelete(file) {
    if (file.path === this.currentDueFilePath) {
      await this.promiseMetadataChangeOrTimeOut();
      this.resetView();
      this.setPage();
    }
  }
  async handleExternalRename(file, oldFilePath) {
    if (oldFilePath === this.currentDueFilePath) {
      await this.promiseMetadataChangeOrTimeOut();
      this.resetView();
      this.setPage();
    }
  }
  async setPage(ignoreFilePath) {
    var _a, _b;
    await this.indexPromise;
    this.setMessage("");
    this.messageContainer.style.display = "none";
    this.refreshFilterUI();
    const page = getNextDueNote(this.dv, this.settings.ignoreFolderPath, ignoreFilePath, this.settings.enqueueNonRepeatingNotes, this.settings.defaultRepeat, this.settings.filterQuery || void 0);
    if (!page) {
      const totalDue = ((_a = getNotesDue(this.dv, this.settings.ignoreFolderPath, ignoreFilePath, this.settings.enqueueNonRepeatingNotes, this.settings.defaultRepeat)) == null ? void 0 : _a.length) || 0;
      if (totalDue > 0 && this.settings.filterQuery) {
        this.setMessage(`No notes matching filter. ${totalDue} other notes are due.`);
      } else {
        this.setMessage("All done for now!");
      }
      this.buttonsContainer.createEl("button", {
        text: "Refresh"
      }, (buttonElement) => {
        buttonElement.onclick = () => {
          this.resetView();
          this.setPage();
        };
      });
      return;
    }
    const dueFilePath = (page == null ? void 0 : page.file).path;
    this.currentDueFilePath = dueFilePath;
    const choices = getRepeatChoices(page.repetition, this.settings);
    const matchingMarkdowns = this.app.vault.getMarkdownFiles().filter((file2) => (file2 == null ? void 0 : file2.path) === dueFilePath);
    if (!matchingMarkdowns) {
      this.setMessage(`Error: Could not find due note ${dueFilePath}. Reopen this view to retry.`);
      return;
    }
    const file = matchingMarkdowns[0];
    choices.forEach((choice) => this.addRepeatButton(choice, file));
    this.previewContainer.addClass("markdown-embed");
    renderTitleElement(this.previewContainer, file, this.app.vault);
    const markdownContainer = createEl("div", {
      cls: "markdown-embed-content"
    });
    if ((_b = page == null ? void 0 : page.repetition) == null ? void 0 : _b.hidden) {
      markdownContainer.addClass("repeat-markdown_blurred");
      const onBlurredClick = (event) => {
        event.preventDefault();
        markdownContainer.removeClass("repeat-markdown_blurred");
      };
      markdownContainer.addEventListener("click", onBlurredClick, { once: true });
    }
    this.previewContainer.appendChild(markdownContainer);
    const markdown = await this.app.vault.cachedRead(file);
    const delimitedFrontmatterBounds = determineFrontmatterBounds(markdown, true);
    await renderMarkdown(this.app, markdown.slice(delimitedFrontmatterBounds ? delimitedFrontmatterBounds[1] : 0), markdownContainer, file.path, this.component, this.app.vault);
  }
  resetView() {
    this.messageContainer && this.messageContainer.remove();
    this.filterContainer && this.filterContainer.remove();
    this.buttonsContainer && this.buttonsContainer.remove();
    this.previewContainer && this.previewContainer.remove();
    this.messageContainer = this.root.createEl("div", { cls: "repeat-message" });
    this.messageContainer.style.display = "none";
    this.createFilterUI();
    this.buttonsContainer = this.root.createEl("div", { cls: "repeat-buttons" });
    this.previewContainer = this.root.createEl("div", { cls: "repeat-embedded_note" });
    this.currentDueFilePath = void 0;
  }
  createFilterUI() {
    this.filterContainer = this.root.createEl("div", { cls: "repeat-filter" });
    this.filterHeader = this.filterContainer.createEl("div", { cls: "repeat-filter-header" });
    this.filterHeader.addEventListener("click", this.toggleFilterDrawer);
    this.filterToggleIcon = this.filterHeader.createEl("span", {
      cls: "repeat-filter-toggle-icon"
    });
    (0, import_obsidian4.setIcon)(this.filterToggleIcon, "chevron-right");
    this.filterCountEl = this.filterHeader.createEl("span", {
      cls: "repeat-filter-count"
    });
    this.filterContent = this.filterContainer.createEl("div", {
      cls: "repeat-filter-content"
    });
    this.filterContent.style.display = "none";
    const queryRow = this.filterContent.createEl("div", { cls: "repeat-filter-row" });
    this.queryInput = queryRow.createEl("input", {
      cls: "repeat-filter-query-input",
      attr: {
        type: "text",
        placeholder: "Filter: #tag or Dataview expression...",
        value: this.settings.filterQuery || ""
      }
    });
    this.queryInput.value = this.settings.filterQuery || "";
    this.queryInput.addEventListener("input", () => this.handleQueryChange());
    this.queryInput.addEventListener("keydown", (e) => {
      var _a, _b;
      if (e.key === "Enter") {
        this.handleQueryChange();
        (_b = (_a = this.handleQueryChange).cancel) == null ? void 0 : _b.call(_a);
      }
    });
    const clearBtn = queryRow.createEl("button", {
      cls: "repeat-filter-btn",
      text: "Clear"
    });
    clearBtn.addEventListener("click", this.handleClearQuery);
    this.tagShortcutsContainer = this.filterContent.createEl("div", {
      cls: "repeat-filter-tags"
    });
    const savedFilterRow = this.filterContent.createEl("div", { cls: "repeat-filter-row" });
    this.savedFilterDropdown = savedFilterRow.createEl("select", {
      cls: "repeat-filter-dropdown"
    });
    this.savedFilterDropdown.addEventListener("change", this.handleLoadSavedFilter);
    const saveBtn = savedFilterRow.createEl("button", {
      cls: "repeat-filter-btn",
      text: "Save"
    });
    saveBtn.addEventListener("click", this.handleSaveFilter);
    const deleteBtn = savedFilterRow.createEl("button", {
      cls: "repeat-filter-btn repeat-filter-btn-danger",
      text: "Delete"
    });
    deleteBtn.addEventListener("click", this.handleDeleteSavedFilter);
    this.filterErrorEl = this.filterContent.createEl("div", {
      cls: "repeat-filter-error"
    });
    this.filterErrorEl.style.display = "none";
  }
  toggleFilterDrawer() {
    this.filterExpanded = !this.filterExpanded;
    this.filterContent.style.display = this.filterExpanded ? "block" : "none";
    (0, import_obsidian4.setIcon)(this.filterToggleIcon, this.filterExpanded ? "chevron-down" : "chevron-right");
    this.filterContainer.toggleClass("repeat-filter-expanded", this.filterExpanded);
  }
  renderTagShortcuts() {
    this.tagShortcutsContainer.empty();
    const tagsToShow = this.availableTags.slice(0, this.displayedTagCount);
    const hiddenCount = this.availableTags.length - this.displayedTagCount;
    tagsToShow.forEach(({ tag, count }) => {
      const tagBtn = this.tagShortcutsContainer.createEl("button", {
        cls: "repeat-filter-tag",
        text: `${tag} (${count})`
      });
      tagBtn.addEventListener("click", () => this.handleTagClick(tag));
    });
    if (hiddenCount > 0) {
      const moreLink = this.tagShortcutsContainer.createEl("button", {
        cls: "repeat-filter-tag-more",
        text: `+${hiddenCount} more`
      });
      moreLink.addEventListener("click", this.handleShowMoreTags);
    }
  }
  handleShowMoreTags() {
    this.displayedTagCount += 6;
    this.renderTagShortcuts();
  }
  refreshFilterUI() {
    this.availableTags = getTagsFromDueNotes(this.dv, this.settings.ignoreFolderPath, void 0, this.settings.enqueueNonRepeatingNotes, this.settings.defaultRepeat) || [];
    this.displayedTagCount = 6;
    this.renderTagShortcuts();
    this.savedFilterDropdown.empty();
    const defaultOption = this.savedFilterDropdown.createEl("option", {
      text: "Load saved filter...",
      attr: { value: "" }
    });
    defaultOption.disabled = true;
    const matchingFilterIndex = this.settings.savedFilters.findIndex((f) => f.query === this.settings.filterQuery);
    if (matchingFilterIndex === -1) {
      defaultOption.selected = true;
    }
    this.settings.savedFilters.forEach((filter, index) => {
      const option = this.savedFilterDropdown.createEl("option", {
        text: filter.name,
        attr: { value: index.toString() }
      });
      if (index === matchingFilterIndex) {
        option.selected = true;
      }
    });
    this.updateFilterCount();
  }
  updateFilterCount() {
    var _a, _b;
    const filterQuery = this.settings.filterQuery;
    const totalCount = ((_a = getNotesDue(this.dv, this.settings.ignoreFolderPath, void 0, this.settings.enqueueNonRepeatingNotes, this.settings.defaultRepeat)) == null ? void 0 : _a.length) || 0;
    if (filterQuery) {
      try {
        const filteredCount = ((_b = getNotesDue(this.dv, this.settings.ignoreFolderPath, void 0, this.settings.enqueueNonRepeatingNotes, this.settings.defaultRepeat, filterQuery)) == null ? void 0 : _b.length) || 0;
        const matchingFilter = this.settings.savedFilters.find((f) => f.query === filterQuery);
        if (matchingFilter) {
          this.filterCountEl.textContent = `${matchingFilter.name}: ${filteredCount} matching, ${totalCount} total`;
        } else {
          this.filterCountEl.textContent = `${filteredCount} matching, ${totalCount} total`;
        }
        this.filterErrorEl.style.display = "none";
      } catch (e) {
        this.filterCountEl.textContent = `${totalCount} notes due`;
        this.filterErrorEl.textContent = `Invalid filter: ${e.message || "Check your query syntax"}`;
        this.filterErrorEl.style.display = "block";
      }
    } else {
      this.filterCountEl.textContent = `${totalCount} notes due`;
      this.filterErrorEl.style.display = "none";
    }
  }
  doHandleQueryChange() {
    const newQuery = this.queryInput.value.trim();
    if (newQuery !== this.settings.filterQuery) {
      this.settings.filterQuery = newQuery;
      this.saveSettings();
      this.updateFilterCount();
      this.buttonsContainer.empty();
      this.previewContainer.empty();
      this.previewContainer.removeClass("markdown-embed");
      this.setPage();
    }
  }
  handleTagClick(tag) {
    const currentQuery = this.queryInput.value.trim();
    if (currentQuery) {
      this.queryInput.value = `${currentQuery} OR ${tag}`;
    } else {
      this.queryInput.value = tag;
    }
    this.handleQueryChange();
  }
  async handleClearQuery() {
    this.queryInput.value = "";
    this.settings.filterQuery = "";
    await this.saveSettings();
    this.updateFilterCount();
    this.buttonsContainer.empty();
    this.previewContainer.empty();
    this.previewContainer.removeClass("markdown-embed");
    this.setPage();
  }
  async handleSaveFilter() {
    const currentQuery = this.settings.filterQuery;
    if (!currentQuery) {
      return;
    }
    const modal = new TextInputModal_default(this.app, "Save Filter", "Filter name", "", async (name) => {
      if (!name)
        return;
      const existingIndex = this.settings.savedFilters.findIndex((f) => f.name === name);
      if (existingIndex >= 0) {
        this.settings.savedFilters[existingIndex].query = currentQuery;
      } else {
        this.settings.savedFilters.push({ name, query: currentQuery });
      }
      await this.saveSettings();
      this.refreshFilterUI();
    });
    modal.open();
  }
  async handleLoadSavedFilter(event) {
    const select = event.target;
    const filterIndex = parseInt(select.value);
    if (isNaN(filterIndex))
      return;
    const filter = this.settings.savedFilters[filterIndex];
    if (filter) {
      this.queryInput.value = filter.query;
      this.settings.filterQuery = filter.query;
      await this.saveSettings();
      this.updateFilterCount();
      this.buttonsContainer.empty();
      this.previewContainer.empty();
      this.previewContainer.removeClass("markdown-embed");
      this.setPage();
    }
  }
  async handleDeleteSavedFilter() {
    const select = this.savedFilterDropdown;
    const filterIndex = parseInt(select.value);
    if (isNaN(filterIndex))
      return;
    const filter = this.settings.savedFilters[filterIndex];
    if (filter) {
      const shouldClearQuery = this.settings.filterQuery === filter.query;
      this.settings.savedFilters.splice(filterIndex, 1);
      if (shouldClearQuery) {
        this.settings.filterQuery = "";
        this.queryInput.value = "";
      }
      await this.saveSettings();
      if (shouldClearQuery) {
        this.buttonsContainer.empty();
        this.previewContainer.empty();
        this.previewContainer.removeClass("markdown-embed");
        this.setPage();
      } else {
        this.refreshFilterUI();
      }
    }
  }
  setMessage(message) {
    this.messageContainer.style.display = "block";
    this.messageContainer.setText(message);
  }
  async addRepeatButton(choice, file) {
    return this.buttonsContainer.createEl("button", {
      text: choice.text
    }, (buttonElement) => {
      buttonElement.onclick = async () => {
        this.resetView();
        const markdown = await this.app.vault.read(file);
        const newMarkdown = updateRepetitionMetadata(markdown, serializeRepetition(choice.nextRepetition));
        this.app.vault.modify(file, newMarkdown);
        this.setPage(file.path);
      };
    });
  }
};
var RepeatView_default = RepeatView;

// src/repeat/obsidian/RepeatNoteSetupModal.ts
var import_obsidian5 = require("obsidian");
var formatDateTimeForPicker = (dt) => [
  dt.toFormat("yyyy-MM-dd"),
  "T",
  dt.toFormat("HH:mm")
].join("");
var RepeatNoteSetupModal = class extends import_obsidian5.Modal {
  constructor(app, onSubmit, settings, initialValue) {
    super(app);
    this.weekdayToggles = /* @__PURE__ */ new Map();
    this.onSubmit = onSubmit;
    this.updateResult = this.updateResult.bind(this);
    this.settings = settings;
    this.result = initialValue ? { ...initialValue } : {
      ...settings.defaultRepeat,
      repeatDueAt: void 0,
      hidden: false
    };
    if (!this.result.repeatDueAt) {
      this.updateResult("repeatPeriod", this.result.repeatPeriod);
    }
    this.result.summary = summarizeDueAtWithPrefix(this.result.repeatDueAt);
    this.datetimePickerEl;
  }
  updateResult(key, value) {
    var _a;
    this.result[key] = value;
    if (key === "repeatStrategy" || key === "repeatPeriodUnit") {
      this.updateVisibility();
    }
    this.result.repeatDueAt = incrementRepeatDueAt({
      ...this.result,
      repeatDueAt: void 0
    }, this.settings);
    this.result.summary = summarizeDueAtWithPrefix(this.result.repeatDueAt);
    if (this.datetimePickerEl) {
      this.datetimePickerEl.value = formatDateTimeForPicker(this.result.repeatDueAt);
    }
    (_a = this.dueAtSummaryEl) == null ? void 0 : _a.setText(this.result.summary);
  }
  updateVisibility() {
    const isWeekdays = this.result.repeatPeriodUnit === "WEEKDAYS";
    if (this.weekdayContainerEl) {
      this.weekdayContainerEl.style.display = isWeekdays ? "block" : "none";
    }
    if (this.frequencyContainerEl) {
      this.frequencyContainerEl.style.display = isWeekdays ? "none" : "block";
    }
    if (isWeekdays && this.weekdayToggles.size > 0) {
      this.weekdayToggles.forEach((toggle, weekday) => {
        var _a;
        const shouldBeChecked = ((_a = this.result.repeatWeekdays) == null ? void 0 : _a.includes(weekday)) || false;
        toggle.setValue(shouldBeChecked);
      });
    }
    if (!isWeekdays) {
      if (this.periodInputEl) {
        this.periodInputEl.setValue(`${this.result.repeatPeriod}`);
      }
      if (this.periodUnitDropdownEl) {
        this.periodUnitDropdownEl.setValue(this.result.repeatPeriodUnit);
      }
    }
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("repeat-setup_modal");
    new import_obsidian5.Setting(contentEl).setName("Repeat type").addDropdown((dropdown) => {
      dropdown.addOption("PERIODIC", "Periodic");
      dropdown.addOption("SPACED", "Spaced");
      dropdown.addOption("WEEKDAYS", "Weekdays");
      const currentStrategy = this.result.repeatPeriodUnit === "WEEKDAYS" ? "WEEKDAYS" : this.result.repeatStrategy;
      dropdown.setValue(currentStrategy);
      dropdown.onChange((value) => {
        if (value === "WEEKDAYS") {
          this.result.repeatStrategy = "PERIODIC";
          this.result.repeatPeriodUnit = "WEEKDAYS";
          this.result.repeatPeriod = 1;
          if (!this.result.repeatWeekdays || this.result.repeatWeekdays.length === 0) {
            this.result.repeatWeekdays = ["monday"];
          }
        } else {
          this.result.repeatStrategy = value;
          this.result.repeatPeriodUnit = "DAY";
          this.result.repeatPeriod = 1;
          delete this.result.repeatWeekdays;
        }
        this.updateResult("repeatStrategy", this.result.repeatStrategy);
      });
    });
    const frequencyEl = new import_obsidian5.Setting(contentEl).setName("Repeat in").addText((text) => {
      text.inputEl.type = "number";
      text.inputEl.style.width = "150px";
      text.inputEl.style.marginRight = "5px";
      text.setValue(`${this.result.repeatPeriod}`);
      text.onChange((value) => {
        const repeatPeriod = parseInt(value) || 1;
        this.updateResult("repeatPeriod", repeatPeriod);
      });
      this.periodInputEl = text;
    }).addDropdown((dropdown) => {
      dropdown.addOption("HOUR", "hour(s)");
      dropdown.addOption("DAY", "day(s)");
      dropdown.addOption("WEEK", "week(s)");
      dropdown.addOption("MONTH", "month(s)");
      dropdown.addOption("YEAR", "year(s)");
      dropdown.setValue(this.result.repeatPeriodUnit);
      dropdown.onChange((value) => {
        this.updateResult("repeatPeriodUnit", value);
      });
      this.periodUnitDropdownEl = dropdown;
    });
    this.frequencyContainerEl = frequencyEl.settingEl;
    const weekdayContainerEl = contentEl.createEl("div");
    weekdayContainerEl.createEl("h4", { text: "Select days" });
    weekdayContainerEl.createEl("p", {
      text: "Choose on which days of the week to repeat",
      cls: "setting-item-description"
    });
    const weekdays2 = [
      { key: "monday", label: "Monday" },
      { key: "tuesday", label: "Tuesday" },
      { key: "wednesday", label: "Wednesday" },
      { key: "thursday", label: "Thursday" },
      { key: "friday", label: "Friday" },
      { key: "saturday", label: "Saturday" },
      { key: "sunday", label: "Sunday" }
    ];
    weekdays2.forEach(({ key, label }) => {
      new import_obsidian5.Setting(weekdayContainerEl).setName(label).addToggle((toggle) => {
        var _a;
        const isSelected = ((_a = this.result.repeatWeekdays) == null ? void 0 : _a.includes(key)) || false;
        toggle.setValue(isSelected);
        this.weekdayToggles.set(key, toggle);
        toggle.onChange((value) => {
          if (!this.result.repeatWeekdays) {
            this.result.repeatWeekdays = [];
          }
          if (value && !this.result.repeatWeekdays.includes(key)) {
            this.result.repeatWeekdays.push(key);
          } else if (!value) {
            this.result.repeatWeekdays = this.result.repeatWeekdays.filter((day) => day !== key);
          }
          if (this.result.repeatWeekdays.length === 0) {
            this.result.repeatWeekdays = ["monday"];
            const mondayToggle = this.weekdayToggles.get("monday");
            if (mondayToggle) {
              mondayToggle.setValue(true);
            }
          }
          this.updateResult("repeatWeekdays", this.result.repeatWeekdays);
        });
      });
    });
    this.weekdayContainerEl = weekdayContainerEl;
    try {
      frequencyEl.components[0].inputEl.style.height = `${frequencyEl.components[1].selectEl.clientHeight}px`;
    } catch (e) {
      console.error(e);
    }
    const timeOfDayEl = new import_obsidian5.Setting(contentEl).addDropdown((dropdown) => {
      dropdown.addOption("AM", `in the morning at ${this.settings.morningReviewTime}`);
      dropdown.addOption("PM", `in the evening at ${this.settings.eveningReviewTime}`);
      dropdown.setValue(this.result.repeatTimeOfDay);
      dropdown.onChange((value) => {
        this.updateResult("repeatTimeOfDay", value);
      });
    });
    try {
      timeOfDayEl.settingEl.style.borderTop = "0px";
      timeOfDayEl.settingEl.style.paddingTop = "0px";
    } catch (e) {
      console.error("Repeat Plugin: Could not set time of day HTML element styles:");
      console.error(e);
    }
    const nextRepeatEl = new import_obsidian5.Setting(contentEl).setName("Next repeat").setDesc(this.result.summary).addText((datetimePicker) => {
      datetimePicker.inputEl.type = "datetime-local";
      datetimePicker.inputEl.addClass("repeat-date_picker");
      const pickerValue = formatDateTimeForPicker(this.result.repeatDueAt);
      datetimePicker.inputEl.value = pickerValue;
      this.datetimePickerEl = datetimePicker.inputEl;
      datetimePicker.onChange((value) => {
        var _a;
        const parsedValue = DateTime.fromISO(value);
        if (parsedValue.invalid) {
          console.error("Repeat Plugin: Could not parse datetime from picker.");
          return;
        }
        this.result.repeatDueAt = parsedValue;
        this.result.summary = summarizeDueAtWithPrefix(this.result.repeatDueAt);
        (_a = this.dueAtSummaryEl) == null ? void 0 : _a.setText(this.result.summary);
      });
    });
    this.dueAtSummaryEl = nextRepeatEl == null ? void 0 : nextRepeatEl.descEl;
    new import_obsidian5.Setting(contentEl).setName("Hidden").setDesc("Blur contents until clicked").addToggle((toggle) => toggle.setValue(this.result.hidden).onChange((value) => {
      this.result.hidden = value;
    }));
    new import_obsidian5.Setting(contentEl).addButton((btn) => btn.setButtonText("Set Up Repetition").setCta().onClick(() => {
      const final = { ...this.result };
      delete final.summary;
      this.close();
      this.onSubmit(this.result);
    }));
    this.updateVisibility();
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var RepeatNoteSetupModal_default = RepeatNoteSetupModal;

// src/main.ts
var import_obsidian_dataview2 = __toESM(require_lib());
var COUNT_DEBOUNCE_MS = 5 * 1e3;
var RepeatPlugin = class extends import_obsidian6.Plugin {
  constructor(app, manifest) {
    super(app, manifest);
    this.updateNotesDueCount = (0, import_obsidian6.debounce)(this.updateNotesDueCount, COUNT_DEBOUNCE_MS).bind(this);
    this.manageStatusBarItem = this.manageStatusBarItem.bind(this);
    this.registerCommands = this.registerCommands.bind(this);
    this.makeRepeatRibbonIcon = this.makeRepeatRibbonIcon.bind(this);
  }
  async activateRepeatNotesDueView() {
    this.app.workspace.detachLeavesOfType(REPEATING_NOTES_DUE_VIEW);
    await this.app.workspace.getLeaf(true).setViewState({
      type: REPEATING_NOTES_DUE_VIEW,
      active: true
    });
    this.app.workspace.revealLeaf(this.app.workspace.getLeavesOfType(REPEATING_NOTES_DUE_VIEW)[0]);
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
    if (!this.settings.showDueCountInStatusBar && this.statusBarItem) {
      this.statusBarItem.remove();
      this.statusBarItem = void 0;
    }
    if (this.settings.showDueCountInStatusBar) {
      this.makeStatusBarItem();
      this.updateNotesDueCount();
    }
    if (!this.settings.showRibbonIcon && this.ribbonIcon) {
      this.ribbonIcon.remove();
      this.ribbonIcon = void 0;
    }
    if (this.settings.showRibbonIcon && !this.ribbonIcon) {
      this.makeRepeatRibbonIcon();
    }
  }
  makeStatusBarItem() {
    if (this.settings.showDueCountInStatusBar && !this.statusBarItem) {
      this.statusBarItem = this.addStatusBarItem();
      this.statusBarItem.addClass("mod-clickable");
      this.statusBarItem.setText("Repeat");
      this.statusBarItem.addEventListener("click", () => {
        this.activateRepeatNotesDueView();
      });
    }
  }
  updateNotesDueCount() {
    var _a;
    if (this.settings.showDueCountInStatusBar && this.statusBarItem) {
      const dueNoteCount = (_a = getNotesDue((0, import_obsidian_dataview2.getAPI)(this.app), this.settings.ignoreFolderPath, void 0, this.settings.enqueueNonRepeatingNotes, this.settings.defaultRepeat)) == null ? void 0 : _a.length;
      if (dueNoteCount != void 0) {
        this.statusBarItem.setText(`${dueNoteCount} repeat notes due`);
      }
    }
  }
  manageStatusBarItem() {
    this.makeStatusBarItem();
    const dv = (0, import_obsidian_dataview2.getAPI)(this.app);
    const onIndexReady = () => {
      this.updateNotesDueCount();
      setTimeout(() => {
        this.registerEvent(this.app.metadataCache.on("dataview:metadata-change", this.updateNotesDueCount));
      }, COUNT_DEBOUNCE_MS);
    };
    if (dv == null ? void 0 : dv.index.initialized) {
      onIndexReady();
    } else {
      this.registerEvent(this.app.metadataCache.on("dataview:index-ready", onIndexReady));
    }
    const FIVE_MINUTES_IN_MS = 5 * 60 * 1e3;
    this.registerInterval(window.setInterval(this.updateNotesDueCount, FIVE_MINUTES_IN_MS));
  }
  makeRepeatRibbonIcon() {
    if (this.settings.showRibbonIcon) {
      this.ribbonIcon = this.addRibbonIcon("clock", "Repeat due notes", () => {
        this.activateRepeatNotesDueView();
      });
    }
  }
  registerCommands() {
    this.addCommand({
      id: "setup-repeat-note",
      name: "Repeat this note...",
      checkCallback: (checking) => {
        const markdownView = this.app.workspace.getActiveViewOfType(import_obsidian6.MarkdownView);
        const onSubmit = (result) => {
          if (!markdownView || !markdownView.file) {
            return;
          }
          const { editor, file } = markdownView;
          const content = editor.getValue();
          const newContent = updateRepetitionMetadata(content, serializeRepetition(result));
          this.app.vault.modify(file, newContent);
        };
        if (markdownView) {
          if (!checking) {
            let repetition;
            if (markdownView) {
              const { editor } = markdownView;
              const content = editor.getValue();
              repetition = parseRepetitionFromMarkdown(content);
            }
            new RepeatNoteSetupModal_default(this.app, onSubmit, this.settings, repetition).open();
          }
          return true;
        }
        return false;
      }
    });
    this.addCommand({
      id: "open-repeat-view",
      name: "Review due notes",
      callback: () => {
        this.activateRepeatNotesDueView();
      }
    });
    ["day", "week", "month", "year"].map((unit) => {
      this.addCommand({
        id: `repeat-every-${unit}`,
        name: `Repeat this note every ${unit}`,
        checkCallback: (checking) => {
          const markdownView = this.app.workspace.getActiveViewOfType(import_obsidian6.MarkdownView);
          if (markdownView && !!markdownView.file) {
            if (!checking) {
              const { editor, file } = markdownView;
              const content = editor.getValue();
              const repeat = {
                repeatStrategy: "PERIODIC",
                repeatPeriod: 1,
                repeatPeriodUnit: unit.toUpperCase(),
                repeatTimeOfDay: "AM"
              };
              const repeatDueAt = incrementRepeatDueAt({
                ...repeat,
                repeatDueAt: void 0
              }, this.settings);
              const newContent = updateRepetitionMetadata(content, serializeRepetition({
                ...repeat,
                hidden: parseHiddenFieldFromMarkdown(content),
                repeatDueAt,
                virtual: false
              }));
              this.app.vault.modify(file, newContent);
            }
            return true;
          }
          return false;
        }
      });
    });
    this.addCommand({
      id: "repeat-never",
      name: "Never repeat this note",
      checkCallback: (checking) => {
        const markdownView = this.app.workspace.getActiveViewOfType(import_obsidian6.MarkdownView);
        if (markdownView && !!markdownView.file) {
          if (!checking) {
            const { editor, file } = markdownView;
            const content = editor.getValue();
            const newContent = updateRepetitionMetadata(content, {
              repeat: "never",
              due_at: void 0,
              hidden: void 0
            });
            this.app.vault.modify(file, newContent);
          }
          return true;
        }
        return false;
      }
    });
    this.addCommand({
      id: "repeat-never",
      name: "Never repeat this note",
      checkCallback: (checking) => {
        const markdownView = this.app.workspace.getActiveViewOfType(import_obsidian6.MarkdownView);
        if (markdownView && !!markdownView.file) {
          if (!checking) {
            const { editor, file } = markdownView;
            const content = editor.getValue();
            const newContent = updateRepetitionMetadata(content, {
              repeat: "never",
              due_at: void 0,
              hidden: void 0
            });
            this.app.vault.modify(file, newContent);
          }
          return true;
        }
        return false;
      }
    });
  }
  async onload() {
    await this.loadSettings();
    this.makeRepeatRibbonIcon();
    this.manageStatusBarItem();
    this.registerCommands();
    this.registerView(REPEATING_NOTES_DUE_VIEW, (leaf) => new RepeatView_default(leaf, this.settings, this.saveSettings.bind(this)));
    this.addSettingTab(new RepeatPluginSettingTab(this.app, this));
  }
  onunload() {
    this.app.workspace.detachLeavesOfType(REPEATING_NOTES_DUE_VIEW);
  }
};
var RepeatPluginSettingTab = class extends import_obsidian6.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Repeat Plugin Settings" });
    new import_obsidian6.Setting(containerEl).setName("Show due count in status bar").setDesc("Whether to display how many notes are due in Obsidian's status bar.").addToggle((component) => component.setValue(this.plugin.settings.showDueCountInStatusBar).onChange(async (value) => {
      this.plugin.settings.showDueCountInStatusBar = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian6.Setting(containerEl).setName("Show ribbon icon").setDesc("Whether to display the ribbon icon that opens the Repeat pane.").addToggle((component) => component.setValue(this.plugin.settings.showRibbonIcon).onChange(async (value) => {
      this.plugin.settings.showRibbonIcon = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian6.Setting(containerEl).setName("Ignore folder path").setDesc("Notes in this folder and its subfolders will not become due. Useful to avoid reviewing templates.").addText((component) => component.setValue(this.plugin.settings.ignoreFolderPath).onChange(async (value) => {
      this.plugin.settings.ignoreFolderPath = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian6.Setting(containerEl).setName("Morning review time").setDesc("When morning and long-term notes become due in the morning.").addText((component) => {
      component.inputEl.type = "time";
      component.inputEl.addClass("repeat-date_picker");
      component.setValue(this.plugin.settings.morningReviewTime);
      component.onChange(async (value) => {
        const usedValue = value >= "12:00" ? "11:59" : value;
        this.plugin.settings.morningReviewTime = usedValue;
        component.setValue(usedValue);
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian6.Setting(containerEl).setName("Evening review time").setDesc("When evening notes become due in the afternoon.").addText((component) => {
      component.inputEl.type = "time";
      component.inputEl.addClass("repeat-date_picker");
      component.setValue(this.plugin.settings.eveningReviewTime);
      component.onChange(async (value) => {
        const usedValue = value < "12:00" ? "12:00" : value;
        this.plugin.settings.eveningReviewTime = usedValue;
        component.setValue(usedValue);
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian6.Setting(containerEl).setName("Default `repeat` property").setDesc(`Used to populate "Repeat this note..." command's modal. Ignored if the supplied value is not parsable.`).addText((component) => {
      return component.setValue(serializeRepeat(this.plugin.settings.defaultRepeat)).onChange(async (value) => {
        const newRepeat = parseRepeat(value);
        this.plugin.settings.defaultRepeat = newRepeat;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian6.Setting(containerEl).setName("Enqueue non-repeating notes").setDesc("Add notes without a repeat field to the end of the queue. Useful to quickly make new notes repeating during reviews.").addToggle((component) => component.setValue(this.plugin.settings.enqueueNonRepeatingNotes).onChange(async (value) => {
      this.plugin.settings.enqueueNonRepeatingNotes = value;
      await this.plugin.saveSettings();
    }));
  }
};

/* nosourcemap */