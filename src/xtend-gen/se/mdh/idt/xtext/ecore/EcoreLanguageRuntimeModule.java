package se.mdh.idt.xtext.ecore;

import org.eclipse.xtext.naming.DefaultDeclarativeQualifiedNameProvider;
import org.eclipse.xtext.naming.IQualifiedNameProvider;
import org.eclipse.xtext.resource.generic.AbstractGenericResourceRuntimeModule;

@SuppressWarnings("all")
public class EcoreLanguageRuntimeModule extends AbstractGenericResourceRuntimeModule {
  @Override
  protected String getLanguageName() {
    return "org.eclipse.emf.ecore.presentation.EcoreEditorID";
  }
  
  @Override
  protected String getFileExtensions() {
    return "ecore";
  }
  
  @Override
  public Class<? extends IQualifiedNameProvider> bindIQualifiedNameProvider() {
    return DefaultDeclarativeQualifiedNameProvider.class;
  }
}
