package se.mdh.idt.xtext.ecore;

import com.google.inject.Guice;
import com.google.inject.Injector;
import org.eclipse.emf.ecore.EPackage;
import org.eclipse.emf.ecore.EcorePackage;
import org.eclipse.xtext.ISetup;
import org.eclipse.xtext.resource.IResourceServiceProvider;
import se.mdh.idt.xtext.ecore.EcoreLanguageRuntimeModule;

@SuppressWarnings("all")
public class EcoreLanguageStandaloneSetup implements ISetup {
  @Override
  public Injector createInjectorAndDoEMFRegistration() {
    final Injector injector = this.createInjector();
    this.register(injector);
    return injector;
  }
  
  public Injector createInjector() {
    EcoreLanguageRuntimeModule _ecoreLanguageRuntimeModule = new EcoreLanguageRuntimeModule();
    return Guice.createInjector(_ecoreLanguageRuntimeModule);
  }
  
  public void register(final Injector injector) {
    boolean _containsKey = EPackage.Registry.INSTANCE.containsKey("http://www.eclipse.org/emf/2002/Ecore");
    boolean _not = (!_containsKey);
    if (_not) {
      EPackage.Registry.INSTANCE.put("http://www.eclipse.org/emf/2002/Ecore", EcorePackage.eINSTANCE);
    }
    final IResourceServiceProvider resourceServiceProvider = injector.<IResourceServiceProvider>getInstance(IResourceServiceProvider.class);
    IResourceServiceProvider.Registry.INSTANCE.getExtensionToFactoryMap().put("ecore", resourceServiceProvider);
  }
}
