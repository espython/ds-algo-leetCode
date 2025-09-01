class LRUCache {
    int capacity;
    LinkedHashMap<Integer,Integer> cache;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.cache = new LinkedHashMap<Integer,Integer>();
        
    }
    
    public Integer get(int key) {
        Integer value = this.cache.get(key);
        if(value != null){
            this.cache.remove(key);
            this.cache.put(key,value);
        }
        return (value != null) ? value : -1;
        
    }
    
    public void put(int key, int value) {
        if(this.cache.containsKey(key)){
            this.cache.remove(key);

        }else if(cache.size() >= this.capacity){
            int firstKey = this.cache.keySet().iterator().next();
            this.cache.remove(firstKey);
        }
        this.cache.put(key,value);
        
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */