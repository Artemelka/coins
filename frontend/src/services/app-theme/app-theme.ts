type Params = {
  dataAttr?: string;
  defaultTheme?: string;
  element: Element;
  lsKey?: string;
};

interface AppThemeService {
  change: (themeName: string) => void;
  get: () => string;
  init: () => void;
}

export class AppTheme implements AppThemeService {
  private readonly dataAttr: string;
  private readonly defaultTheme: string;
  private readonly element: Element;
  private readonly lsKey: string;
  private readonly save: (themeName: string) => void;
  private readonly set: (themeName: string) => void;

  constructor(params: Params) {
    this.dataAttr = params.dataAttr || 'theme';
    this.lsKey = params.lsKey || 'themeName';
    this.defaultTheme = params.defaultTheme || 'light';
    this.element = params.element;

    this.save = (themeName) => {
      localStorage.setItem(this.lsKey, themeName);
    };

    this.set = (themeName) => {
      this.element.setAttribute(this.dataAttr, themeName);
    }
  }

  public change = (themeName: string) => {
    this.save(themeName);
    this.set(themeName);
  }

  public get() {
    return localStorage.getItem(this.lsKey) || this.defaultTheme;
  }

  public init() {
    this.change(this.get());
  }
}