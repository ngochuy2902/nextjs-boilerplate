class StorageClient {
  storage: Storage;

  constructor(type: 'local' | 'session') {
    if (typeof window !== 'undefined') {
      this.storage =
        type === 'local' ? window.localStorage : window.sessionStorage;
    } else {
      // For SSR, use a dummy storage implementation
      this.storage = {
        getItem: () => null,
        setItem: () => {
          return null;
        },
        removeItem: () => {
          return null;
        },
        clear: () => {
          return null;
        },
        key: () => null,
        length: 0,
      } as Storage;
    }
  }

  get(key: string) {
    const data: string | null = this.storage.getItem(key);

    if (data) {
      if (typeof data === 'object') {
        return JSON.parse(data);
      }
      return data;
    }

    return null;
  }

  set(key: string, obj: any) {
    this.storage.setItem(key, JSON.stringify(obj));
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  removeAll() {
    this.storage.clear();
  }
}

export const localStorage = (type: 'local' | 'session' = 'local') =>
  new StorageClient(type);
